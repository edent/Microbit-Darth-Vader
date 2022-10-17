phrase = 0

def on_button_pressed_a():
    for index in range(3):
        music.play_tone(262, music.beat(BeatFraction.WHOLE))
    for index2 in range(2):
        music.play_tone(208, music.beat(BeatFraction.WHOLE))
        music.play_tone(311, music.beat(BeatFraction.HALF))
        music.play_tone(262, music.beat(BeatFraction.WHOLE))
        basic.pause(250)
    for index3 in range(3):
        music.play_tone(523, music.beat(BeatFraction.WHOLE))
    for index4 in range(2):
        music.play_tone(415, music.beat(BeatFraction.WHOLE))
        music.play_tone(622, music.beat(BeatFraction.HALF))
        music.play_tone(523, music.beat(BeatFraction.WHOLE))
        basic.pause(250)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    music.play_tone(392, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play_tone(392, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play_tone(392, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
    music.play_tone(392, music.beat(BeatFraction.WHOLE))
    music.play_tone(392, music.beat(BeatFraction.WHOLE))
    music.play_tone(349, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play_tone(330, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play_tone(294, music.beat(BeatFraction.QUARTER))
    music.play_tone(523, music.beat(BeatFraction.WHOLE))
    music.play_tone(523, music.beat(BeatFraction.WHOLE))
    music.play_tone(392, music.beat(BeatFraction.WHOLE))
    music.play_tone(349, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play_tone(330, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play_tone(294, music.beat(BeatFraction.QUARTER))
    music.play_tone(523, music.beat(BeatFraction.WHOLE))
    music.play_tone(523, music.beat(BeatFraction.WHOLE))
    music.play_tone(392, music.beat(BeatFraction.WHOLE))
    music.play_tone(349, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play_tone(330, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play_tone(349, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play_tone(294, music.beat(BeatFraction.WHOLE))
    music.play_tone(294, music.beat(BeatFraction.WHOLE))
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    global phrase
    phrase = randint(0, 3)
    if phrase == 0:
        basic.show_string("I am your father!")
    if phrase == 1:
        basic.show_string("If you only knew the power of the Dark Side!")
    if phrase == 2:
        basic.show_string("Nooooooo")
    if phrase == 2:
        basic.show_string("Now I am the master.")
    basic.show_leds("""
        . # # # .
                # . . . #
                # # . # #
                # . # . #
                # # # # #
    """)
    basic.pause(1000)
    for index5 in range(4):
        basic.show_icon(IconNames.HEART)
        basic.show_icon(IconNames.SMALL_HEART)
basic.forever(on_forever)
