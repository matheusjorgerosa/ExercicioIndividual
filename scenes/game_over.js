class gameOver extends Phaser.Scene {
    constructor(){
        super({
            key: "game_over",
        })
    }
    preload(){
        this.load.image("game_over", "assets/game_over.png");
    }
    create(){
        this.add.image(larguraJogo / 2, alturaJogo / 2, "game_over");
    }
    upload(){

    }
}