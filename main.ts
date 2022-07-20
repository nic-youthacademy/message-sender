input.onButtonPressed(Button.A, function () {
    currentIndex = (currentIndex + 1) % text_list.length
    finalString = text_list[currentIndex]
    basic.showString(finalString)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString(finalString)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    currentIndex = (currentIndex + 1) % text_list.length
    selectedChar = text_list[currentIndex]
    basic.showString(selectedChar)
})
function initialiseLetters (letterList: string[][]) {
    letterList.unshift([
    " ",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
    ])
    return letterList
}
let finalString = ""
let selectedChar = ""
let currentIndex = 0
let text_list: string[] = []
radio.setGroup(1)
text_list = []
currentIndex = 0
selectedChar = text_list[currentIndex]
finalString = "."
