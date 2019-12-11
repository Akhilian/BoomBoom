var GameScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function GameScene ()
    {
        Phaser.Scene.call(this, { key: 'gameScene', active: true });
        this.player;
    },

    onKeyDown: function (event) {
        console.log({ event })
    },

    preload: function ()
    {
        this.load.image('star', './assets/star.png');
    },

    create: function ()
    {
        this.moveKeys = this.input.keyboard.addKeys({
            'up': Phaser.Input.Keyboard.KeyCodes.W,
            'down': Phaser.Input.Keyboard.KeyCodes.S,
            'left': Phaser.Input.Keyboard.KeyCodes.A,
            'right': Phaser.Input.Keyboard.KeyCodes.D
        });

        const g2 = this.add.grid(0, 0, 600, 600, 100, 100, 0x00b9f2).setAltFillStyle(0x016fce).setOutlineStyle();
        g2.setDisplayOrigin(0, 0)
        this.player = this.add.image(100, 100, 'star');
        this.player.setDisplayOrigin(0, 0)
        this.player.setDisplaySize(100, 100)

        this.input.keyboard.on('keydown_D', (event) => {
            this.player.setPosition(this.player.x + 100, this.player.y)
        });

        this.input.keyboard.on('keydown_Q', (event) => {
            this.player.setPosition(this.player.x - 100, this.player.y)
        });
    },

    update: function ()
    {

        //if (cursors.left.isDown) {
            //this.player.
        //}
    },

});

var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        // autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600
    },
    // physics: {
    //     default: 'arcade',
    //     arcade: {
    //         gravity: { y: 300 },
    //         debug: false
    //     }
    // },
    scene: GameScene
};

var game = new Phaser.Game(config);