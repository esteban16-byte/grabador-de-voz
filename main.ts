input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    // Micrófono en nivel alto para mejorar captación
    record.setMicGain(record.AudioLevels.Low)
    // Usa Nonblocking para mayor fluidez
    record.startRecording(record.BlockingState.Nonblocking)
    // Ajusta el tiempo según la duración deseada de la grabación
    basic.pause(3000)
    record.stopRecording()
basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . . .
        . # # . .
        . # # # .
        . # # . .
        . # . . .
        `)
    // Usa Nonblocking para suavizar reproducción
    record.playAudio(record.BlockingState.Nonblocking)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        `)
})
