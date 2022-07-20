function deleteLastChar (text: string) {
    newLastIndex = finalString.length - 1
    return text.substr(0, newLastIndex)
}
input.onButtonPressed(Button.A, function () {
    currentIndex = (currentIndex + 1) % textList.length
    selectedChar = textList[currentIndex]
    basic.showString("" + (selectedChar))
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("" + (finalString))
    basic.showString("sent!")
    finalString = " "
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    if (selectedChar == "del") {
        finalString = deleteLastChar(finalString)
    } else {
        if (selectedChar == " ") {
            finalString = selectedChar
        } else {
            finalString = "" + finalString + selectedChar
        }
    }
    currentIndex = 0
    selectedChar = textList[currentIndex]
})
let newLastIndex = 0
let finalString = ""
let selectedChar = ""
let currentIndex = 0
let textList: string[] = []
radio.setGroup(1)
textList = [
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
"z",
"del"
]
currentIndex = 0
selectedChar = textList[currentIndex]
finalString = " "
