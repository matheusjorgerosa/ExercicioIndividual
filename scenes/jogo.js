// Declaração de variáveis
var plataformas;
var personagem;
var placar,
    pontuacao = 0;
var retangulo;
var teclado;
var moedas;
var moeda1;
var moeda2;
var moeda3;
var moeda4;
var moeda5;
var moeda6;
var moeda7;
var moeda8;
var pulando;
var slimes;
var parabens;

// Define a classe cenaPrincipal e define a chave "jogo" para a referenciarmos
class cenaPrincipal extends Phaser.Scene {
    constructor() {
        super({
            key: "jogo",
        });
    }

    preload() {
        // Carrega as imagens utilizadas no jogo
        this.load.image("fundo_jogo", "assets/fundo_jogo.png");
        this.load.spritesheet("personagem", "assets/sprite_personagem.png", {
            frameWidth: 48,
            frameHeight: 48,
        });
        this.load.image("plataforma", "assets/tijolos.png");
        this.load.image("moeda", "assets/moeda.png");
        this.load.image("slime", "assets/slime.png");
        this.load.image("chao", "assets/chao.png");
    }

    create() {
        // Adiciona o background e chão do game
        this.add.image(larguraJogo / 2, alturaJogo / 2, "fundo_jogo");
        this.add.sprite(larguraJogo / 2, 690, "chao");

        // Define configurações da sprite do personagem
        personagem = this.physics.add
            .sprite(larguraJogo / 2, 600, "sprite_personagem")
            .setScale(2)
            .setSize(17, 40)
            .setOffset(18, 8);
        personagem.setCollideWorldBounds(true);

        teclado = this.input.keyboard.createCursorKeys();

        // Cria o grupo "slimes" e define as coordenadas de criação dos slimes
        slimes = this.physics.add.staticGroup();
        slimes.create(200, 130, "slime");
        slimes.create(550, 285, "slime");
        slimes.create(200, 395, "slime");
        slimes.create(550, 505, "slime");

        // Cria o grupo "plataformas" e define as coordenadas de criação das plataformas
        plataformas = this.physics.add.staticGroup();
        plataformas.create(200, alturaJogo / 3.8, "plataforma");
        plataformas.create(200, alturaJogo / 1.5, "plataforma");
        plataformas.create(550, alturaJogo / 2, "plataforma");
        plataformas.create(550, alturaJogo / 1.2, "plataforma");
        this.physics.add.collider(personagem, plataformas);

        // Cria o grupo "moedas" e define as coordenadas de criação das moedas
        moedas = this.physics.add.staticGroup();
        moeda1 = moedas.create(150, 100, "moeda");
        moeda2 = moedas.create(250, 100, "moeda");
        moeda3 = moedas.create(500, 260, "moeda");
        moeda4 = moedas.create(600, 260, "moeda");
        moeda5 = moedas.create(150, 370, "moeda");
        moeda6 = moedas.create(250, 370, "moeda");
        moeda7 = moedas.create(500, 480, "moeda");
        moeda8 = moedas.create(600, 480, "moeda");

        // Cria o texto do placar do jogo
        placar = this.add.text(30, 20, "Pontuação: " + pontuacao, {
            fontSize: "40px",
            fill: "#fff",
        });

        // Cria uma lista das variáveis das moedas e estabelece colisão entre personagem e moedas
        const listaMoedas = [moeda1, moeda2, moeda3, moeda4, moeda5, moeda6, moeda7, moeda8];
        for (let moeda of listaMoedas) {
            this.colisaoMoeda(personagem, moeda);
        }

        // Cria animação do personagem parado
        this.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNumbers("personagem", {
                start: 1,
                end: 9,
            }),
            frameRate: 10,
            repeat: -1,
        });

        // Cria animação do personagem correndo
        this.anims.create({
            key: "correr",
            frames: this.anims.generateFrameNumbers("personagem", {
                start: 10,
                end: 17,
            }),
            frameRate: 10,
            repeat: -1,
        });

        // Define colisão entre personagem e slimes
        this.colisaoSlime(personagem, slimes);
        
    }

    update() {
        // Define lógica de movimentação do personagem
        if (teclado.left.isDown) {
            personagem.setVelocityX(-200).setFlipX(true);
            personagem.anims.play("correr", true);
        } else if (teclado.right.isDown) {
            personagem.setVelocityX(200).setFlipX(false);
            personagem.anims.play("correr", true);
        } else {
            personagem.setVelocityX(0);
            personagem.anims.play("idle");
        }

        if (teclado.up.isDown && personagem.body.velocity.y == 0) {
            personagem.setVelocityY(-400);
        }

        // Inclui texto de parabenização quando todas as moedas são coletadas
        if (pontuacao == 8){
            parabens = this.add.text(50, alturaJogo / 2, "Parabéns! você finalizou\no jogo!", {
                fontSize: "40px",
                fill: "#fff",
            });
        }
            
    }

    // Função que define a coleta das moedas
    colisaoMoeda(elemento1, elemento2) {
        this.physics.add.overlap(elemento1, elemento2, () => {
            elemento2.destroy();
            pontuacao += 1;
            placar.setText("Moedas: " + pontuacao);
        });
    }

    // Função que define colisão com os slimes e leva o jogador à tela de Game Over caso ocorra
    colisaoSlime(elemento1, elemento2) {
        this.physics.add.overlap(elemento1, elemento2, () => {
            this.scene.start("game_over");
            this.scene.stop("jogo");
        });
    }
}