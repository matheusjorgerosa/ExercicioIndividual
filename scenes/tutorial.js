class comoJogar extends Phaser.Scene {
    constructor(){
        super({
            key: "tutorial",
        })
    }
    preload(){
        this.load.image("como_jogar", "assets/como_jogar.png")
    }
    create(){
        this.add.image(larguraJogo / 2, alturaJogo / 2, "como_jogar");
    }
    upload(){

    }
}