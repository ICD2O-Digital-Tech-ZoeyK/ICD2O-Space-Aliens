/* global Phaser */

//scene import statements
import SplashScene from "./splashScene.js"

//create the new scenes
const splashScene = new SplashScene()

//Start Phaser Game

const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    // Set Background Color
    backgroundColor: 0x5f6e7a,
    scale: {
        mode: Phaser, Scale, FIT,
        // we place it in the middle of the page.
        autoCenter: Phaser,Scale,CENTER_BOTH
    }
}

const game = new Phaser.Game(config)
//console.log(game)

//load scenes
game.scene.add(splashScene, SplashScene)

//the start scene
game.scene.start("splashScene")
