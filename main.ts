let phrase = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Eighth))
    }
    music.playTone(208, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(311, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(208, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(311, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    for (let index = 0; index < 3; index++) {
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Eighth))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(415, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(622, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Eighth))
    }
})
input.onButtonPressed(Button.B, function () {
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
})
basic.forever(function () {
    phrase = randint(0, 3)
    if (phrase == 0) {
        basic.showString("I am your father!")
    }
    if (phrase == 1) {
        basic.showString("If you only knew the power of the Dark Side!")
    }
    if (phrase == 2) {
        basic.showString("Nooooooo")
    }
    if (phrase == 2) {
        basic.showString("Now I am the master.")
    }
    basic.showLeds(`
        . # # # .
        # . . . #
        # # . # #
        # . # . #
        # # # # #
        `)
    basic.pause(1000)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
})
