bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Heart)
    connected = 1
    while (connected != 0) {
        if (connected == 1) {
            basic.pause(800)
            connected += 1
            bluetooth.uartWriteLine("Microbit connected")
        }
        rec_data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
        // serial.writeString(rec_data)
        // serial.writeLine("")
        // serial.writeValue("status", connected)
        send_data = "#" + rec_data.slice(0, rec_data.length - 1) + "#"
        if (rec_data.indexOf("F") == 0) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . . # . .
                . . # . .
                `)
        } else if (rec_data.indexOf("B") == 0) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . # # # .
                . . # . .
                `)
        } else if (rec_data.indexOf("L") == 0) {
            basic.showLeds(`
                . . # . .
                . # # . .
                # # # # #
                . # # . .
                . . # . .
                `)
        } else if (rec_data.indexOf("R") == 0) {
            basic.showLeds(`
                . . # . .
                . . # # .
                # # # # #
                . . # # .
                . . # . .
                `)
        } else if (rec_data.indexOf("S") == 0) {
            basic.showLeds(`
                . # # # #
                # . . . .
                . # # # .
                . . . . #
                # # # # .
                `)
        } else if (rec_data.indexOf("L_ON") == 0) {
            basic.showString(rec_data)
            soundExpression.spring.play()
        } else {
            basic.showString(rec_data)
        }
    }
    bluetooth.uartWriteLine(send_data)
    basic.pause(300)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
    connected = 0
})
input.onButtonPressed(Button.A, function () {
    if (connected != 0) {
        bluetooth.uartWriteLine("Button A pressed")
    }
})
let send_data = ""
let connected = 0
let rec_data = ""
// bluetooth.startAccelerometerService()
// bluetooth.startButtonService()
// bluetooth.startIOPinService()
// bluetooth.startLEDService()
// bluetooth.startTemperatureService()
// bluetooth.startMagnetometerService()
bluetooth.startUartService()
basic.showIcon(IconNames.Square)
basic.pause(200)
basic.showIcon(IconNames.SmallSquare)
basic.pause(200)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.pause(200)
music.setBuiltInSpeakerEnabled(true)
music.setVolume(127)
basic.clearScreen()
// serial.redirectToUSB()
basic.forever(function () {
    basic.pause(100)
})
