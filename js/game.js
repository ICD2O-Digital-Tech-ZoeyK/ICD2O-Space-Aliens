/* global Phaser */
// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This is the Phaser configuration file

import SplashScene from "./splashScene.js"
import TitleScene from "./titleScene.js"
import MenuScene from "./menuScene.js"
import GameScene from "./gameScene.js"

// Our game scenes
const splashScene = new SplashScene ()
const titleScene = new TitleScene ()
const menuScene = new MenuScene ()
const gameScene = new GameScene()

//* Game scene */
const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        } 
    },
    // set background color
    backgroundColor: 0xffffff,
    scale: {
        mode: Phaser.Scale.FIT,
        // we place it in the middle of the page.
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
}

const game = new Phaser.Game(config)
 
// load scenes
// NOTE: remember any "key" is global and CAN NOT be reused!
game.scene.add("splashScene", splashScene)
game.scene.add("titleScene", titleScene)
game. scene.add ( "menuScene", menuScene)
game.scene.add("gameScene", gameScene)

// start title
game. scene.start ("splashScene")

