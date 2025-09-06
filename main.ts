let maleLights = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
let femaleLights = neopixel.create(DigitalPin.P1, 3, NeoPixelMode.RGB)
let score = 0
let yellowLit = false
let greenLit = false
loops.everyInterval(10000, function () {
    maleLights.showColor(neopixel.colors(NeoPixelColors.Yellow))
    yellowLit = true
    basic.pause(1000)
    maleLights.showColor(neopixel.colors(NeoPixelColors.Black))
    yellowLit = false
})
basic.forever(function () {
	
})
loops.everyInterval(randint(0, 10000), function () {
    femaleLights.showColor(neopixel.colors(NeoPixelColors.Green))
    greenLit = true
    basic.pause(1000)
    femaleLights.showColor(neopixel.colors(NeoPixelColors.Black))
    greenLit = false
})
