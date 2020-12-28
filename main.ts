bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Heart)
    bluetooth.uartWriteLine("Microbit connected")
    connected = 1
    while (connected == 1) {
        rec_data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
        // serial.writeString(rec_data)
        // serial.writeLine("")
        // serial.writeValue("status", connected)
        send_data = "Received ###" + rec_data + "###"
        bluetooth.uartWriteLine(send_data)
        basic.pause(100)
    }
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
    connected = 0
})
input.onButtonPressed(Button.A, function () {
    if (connected != 0) {
        bluetooth.uartWriteLine("Button A pressed\n")
    }
})
/**
 * serial.redirectToUSB()
 */
let send_data = ""
let rec_data = ""
let connected = 0
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
basic.clearScreen()
