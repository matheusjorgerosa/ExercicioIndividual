const larguraJogo = 700;
const alturaJogo = 650;

const config = {
    type: Phaser.AUTO,
    width: larguraJogo,
    height: alturaJogo,
    physics: {
        default: 'arcade',
        arcade: {
            enableBody: true,
            gravity: { y: 500 },
            debug: true
        }
    },
    scene: [
        menuPrincipal, cenaPrincipal
    ],
};

var game = new Phaser.Game(config);