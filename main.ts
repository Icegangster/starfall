input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Player = game.createSprite(2, 4)
    while (A == false) {
        if (input.buttonIsPressed(Button.A)) {
            Player.move(-1)
            basic.pause(100)
        } else if (input.buttonIsPressed(Button.B)) {
            Player.move(1)
            basic.pause(100)
        } else {
            basic.pause(100)
        }
    }
})
let Player: game.LedSprite = null
let Star: game.LedSprite = null
let A = false
let B = 1000
game.addLife(3)
game.setScore(1)
let Leben = 3
while (game.score() > 0) {
    if (Leben == 0) {
        game.gameOver()
    } else if (A == false) {
        basic.pause(B)
        Star = game.createSprite(randint(0, 4), 0)
        basic.pause(B)
        Star.turn(Direction.Right, 90)
        Star.move(1)
        basic.pause(B)
        Star.move(1)
        basic.pause(B)
        Star.move(1)
        basic.pause(B)
        Star.move(1)
        basic.pause(B)
        if (Star.isTouching(Player)) {
            basic.setLedColor(0xff0000)
            basic.pause(500)
            game.removeLife(1)
            Leben += -1
            Player.delete()
            Star.delete()
            Player = game.createSprite(2, 4)
            basic.setLedColor(0x00ff00)
        }
        Star.delete()
        B += -10
        game.addScore(1)
    } else {
    	
    }
}
basic.forever(function () {
	
})
