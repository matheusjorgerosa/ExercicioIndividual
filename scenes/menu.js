class menuPrincipal extends Phaser.Scene {
    constructor(){
        super({
            key: "menu",
        })
        this.botao;
        this.botao_tutorial
    }

    preload(){
        this.load.image("fundo_menu", "assets/fundo_menu.png");
        this.load.image("botao_jogar", "assets/botao_jogar.png");
        this.load.image("botao_tutorial", "assets/botao_tutorial.png");
    }

    create(){
        this.add.image(larguraJogo/2, alturaJogo/2, "fundo_menu");
        this.botao = this.add.image(larguraJogo/2, 430, "botao_jogar").setScale(0.38).setInteractive();
        this.botao_tutorial = this.add.image(larguraJogo/2, 570, "botao_tutorial").setScale(0.38).setInteractive();
        this.botao.on("pointerdown", () => {
        this.scene.start("jogo");
        this.scene.stop("menu");
        });

        this.botao_tutorial.on("pointerdown", () => {
            this.scene.start("tutorial");
            this.scene.stop("menu");
            });
    }

}   
