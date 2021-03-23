input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(2000)
})
input.onButtonPressed(Button.AB, function () {
    if (true) {
        for (let index = 0; index < 4; index++) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(200)
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.pause(200)
        }
    } else {
        for (let index = 0; index < 4; index++) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(200)
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.pause(200)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 5; index++) {
        basic.showNumber(5 - index)
        basic.pause(1000)
        basic.clearScreen()
    }
})
