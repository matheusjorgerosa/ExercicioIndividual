class menuPrincipal extends Phaser.Scene{
    constructor(){
        super({
            key: "menu",
        })
        this.botao;
    }

    preload(){
        this.load.image("fundo_menu", "assets/verde.jpg");
        this.load.image("botao", "assets/botao_ok.png");
    }

    create(){
        this.add.image(larguraJogo/2, alturaJogo/2, "fundo_menu");
        this.botao = this.add.image(larguraJogo/2, 480, "botao").setScale(0.4).setInteractive();
        this.botao.on("pointerdown", () => {
        });
        this.scene.start("jogo");
        this.scene.stop("menu");
    }

}   
