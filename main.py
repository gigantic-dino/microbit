def on_bluetooth_connected():
    global connected, rec_data, send_data
    basic.show_icon(IconNames.HEART)
    basic.pause(200)
    bluetooth.uart_write_line("Microbit connected")
    connected = 1
    while connected == 1:
        rec_data = bluetooth.uart_read_until(serial.delimiters(Delimiters.NEW_LINE))
        # serial.writeString(rec_data)
        # serial.writeLine("")
        # serial.writeValue("status", connected)
        send_data = "Received ###" + rec_data[0:(len(rec_data)-1)] + "###"
        bluetooth.uart_write_line(send_data)
        basic.pause(100)
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    global connected
    basic.show_icon(IconNames.SAD)
    connected = 0
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

def on_button_pressed_a():
    if connected != 0:
        bluetooth.uart_write_line("Button A pressed")
input.on_button_pressed(Button.A, on_button_pressed_a)

"""

serial.redirectToUSB()

"""

def on_forever():
    basic.pause(100)
basic.forever(on_forever)

send_data = ""
rec_data = ""
connected = 0
# bluetooth.startAccelerometerService()
# bluetooth.startButtonService()
# bluetooth.startIOPinService()
# bluetooth.startLEDService()
# bluetooth.startTemperatureService()
# bluetooth.startMagnetometerService()
bluetooth.start_uart_service()
basic.show_icon(IconNames.SQUARE)
basic.pause(200)
basic.show_icon(IconNames.SMALL_SQUARE)
basic.pause(200)
basic.show_leds("""
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    """)
basic.pause(200)
basic.clear_screen()