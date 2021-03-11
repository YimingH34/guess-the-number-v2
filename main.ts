// When you press the A button, it will change the number you are guessing by 1.
input.onButtonPressed(Button.A, function () {
    Guess += 1
})
// If your number is smaller than the actual number and smaller than 21 it will show too small other wise it will show too big but if the number matches the number you inputted then it will show you got it and there will be confetti everywhere.
input.onButtonPressed(Button.AB, function () {
    if (Guess < Acctural_num || Guess < 21) {
        basic.showString("Too small")
    } else {
        basic.showString("Too big")
    }
    if (Guess == Acctural_num) {
        basic.showString("You got it!")
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Chessboard)
            basic.showLeds(`
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                `)
        }
    }
})
// When you press the B button, it will change the number you are guessing by-1.
input.onButtonPressed(Button.B, function () {
    Guess += -1
})
// When the program starts, it will set a random number between 0-20 and the program will set the number to 0
let Guess = 0
let Acctural_num = 0
Acctural_num = randint(0, 20)
Guess = 0
