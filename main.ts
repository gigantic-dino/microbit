bluetooth.onBluetoothConnected(function on_bluetooth_connected() {
    
    basic.showIcon(IconNames.Heart)
    basic.pause(200)
    bluetooth.uartWriteLine("Microbit connected")
    connected = 1
    while (connected == 1) {
        rec_data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
        //  serial.writeString(rec_data)
        //  serial.writeLine("")
        //  serial.writeValue("status", connected)
        send_data = "Received ###" + rec_data.slice(0, rec_data.length - 1) + "###"
        bluetooth.uartWriteLine(send_data)
        basic.pause(100)
    }
})
bluetooth.onBluetoothDisconnected(function on_bluetooth_disconnected() {
    
    basic.showIcon(IconNames.Sad)
    connected = 0
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (connected != 0) {
        bluetooth.uartWriteLine("Button A pressed")
    }
    
})
/** serial.redirectToUSB() */
basic.forever(function on_forever() {
    basic.pause(100)
})
let send_data = ""
let rec_data = ""
let connected = 0
//  bluetooth.startAccelerometerService()
//  bluetooth.startButtonService()
//  bluetooth.startIOPinService()
//  bluetooth.startLEDService()
//  bluetooth.startTemperatureService()
//  bluetooth.startMagnetometerService()
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
