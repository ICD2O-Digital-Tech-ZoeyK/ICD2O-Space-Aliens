/* global Phaser */
// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This is the Game Scene

class GameScene extends Phaser.Scene {
    //create an alien
    createAlien() {
        const alienXloaction = Math.floor(Math.random() * 1920) + 1
        let alienXVelocity = Math.floor(Math.random() * 50) + 1
        alienXVelocity *= Math.round(Math.random()) ? 1 : -1
        const anAlien = this.physics.add.sprite(alienXLocation, -100, "alien")
        anAlien.body.velocity.y = 200
        anAlien.body.velocity.x = alienXVelocity
        this.alienGroup.add(anAlien)

    }

    constructor () {
        super({ key: "gameScene" })

        this.background = null
        this.ship = null
        this.fireMissile = false
    }

    init(data) {
        this.cameras.main.setBackgroundColor("#ffffff")
    }

    preload () {
        console.log("Game Scene")
        
        // images
        this.load.image("starBackground", "assets/starBackground.png")
        this.load.image("ship", "assets/spaceShip.png")
        this.load.image("missile", "assets/missile.png")
        this.load.image("alien", "assets/alien.png")
        // sounds
        this.load.audio("laser", "assets/laser1.wav")
    }

    create(data) {
        this.background = this.add.image(0, 0, "starBackground").setScale(2.0)
        this.background.setOrigin(0, 0)
        
        this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship")

        //create a group for the missiles
        this.missileGroup = this.physics.add.group()

        //create a group for the aliens
        this.alienGroup = this.add.group()
        this.createAlien()
    }

    update(time, delta) {
        //called 60 times a second, hopefully!
        
        const keyLeftObj = this.input.keyboard.addKey("LEFT")
        const keyRightObj = this.input.keyboard.addKey("RIGHT")
        const keySpaceObj = this.input.keyboard.addKey("SPACE")

        if (keyLeftObj.isDown === true) {
            console.log("Left key pressed.")
            this.ship.x -= 15
            if (this.ship.x < 0) {
                this.ship.x = 0
            }

        }
        
        if (keyRightObj.isDown === true) {
            console.log("Right key pressed.")
            this.ship.x += 15
            if (this.ship.x > 1920) {
                this.ship.x = 1920
            }

        }

        if (keySpaceObj.isDown === true) {
            console.log("Space pressed.")
            if (this.fireMissile === false) {
                //fire missiles
                this.fireMissile = true
                const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y, "missile")
                this.missileGroup.add(aNewMissile)
                this.sound.play("laser")
            }

        }

        if (keySpaceObj.isUp === true) {
            this.fireMissile = false
        }

        this.missileGroup.children.each(function (item) {
            item.y = item.y - 15
            if (item.y < 0) {
                item.destroy()
            }
        })
    }
}

export default GameScene