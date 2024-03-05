class gameOver extends Phaser.Scene {
    constructor(){
        super({
            key: "game_over",
        })
    }
    preload(){
        // Carrega tela de Game Over
        this.load.image("game_over", "assets/game_over.png");
    }
    create(){
        // Adiciona tela de Game Over
        this.add.image(larguraJogo / 2, alturaJogo / 2, "game_over");
    }
    upload(){

    }
}