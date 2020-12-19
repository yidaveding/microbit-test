input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(0, 9))
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
