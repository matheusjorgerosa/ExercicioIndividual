class comoJogar extends Phaser.Scene {
    constructor(){
        super({
            key: "tutorial",
        })
    }
    preload(){
        // Carrega imagem da tela de instruções
        this.load.image("como_jogar", "assets/como_jogar.png")
    }
    create(){
        // Adiciona a imagem no meio da tela
        this.add.image(larguraJogo / 2, alturaJogo / 2, "como_jogar");
    }
    upload(){

    }
}