input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Player = game.createSprite(2, 4)
    while (A == false) {
        while (input.buttonIsPressed(Button.A)) {
            Player.move(-1)
            basic.pause(100)
        }
        while (input.buttonIsPressed(Button.B)) {
            Player.move(1)
            basic.pause(100)
        }
    }
})
let Player: game.LedSprite = null
let Star: game.LedSprite = null
let A = false
while (A == false) {
    basic.pause(100)
    Star = game.createSprite(randint(0, 4), 0)
    basic.pause(100)
    Star.turn(Direction.Right, 90)
    Star.move(1)
    basic.pause(100)
    Star.move(1)
    basic.pause(100)
    Star.move(1)
    basic.pause(100)
    Star.move(1)
    basic.pause(100)
    Star.delete()
}
basic.forever(function () {
    if (Star.isTouching(Player)) {
        A = true
    }
})
