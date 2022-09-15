input.onButtonPressed(Button.A, function () {
    Guests += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Guests)
})
input.onButtonPressed(Button.B, function () {
    Guests += -2
})
input.onGesture(Gesture.Shake, function () {
    Guests = 0
})
let Guests = 0
basic.showIcon(IconNames.Asleep)
Guests = 0
