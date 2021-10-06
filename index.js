// Tasks: 

// - write the JS so that the word count appears on the screen
// - update the count as the user types

// Stretch Goals: 
// - display longest word DONE
// - add character count
// - add spell check
// - add styling


const textField = document.getElementById("txtid")
const wordCountDisplay = document.getElementById("word-count")
const charCountDisplay = document.getElementById("char-count")
const longestWordDisplay = document.getElementById("longest-word")

function wordCount(str) {
   return str.split(" ").filter((n) => n != "").length
}

function charCount(str) {
    return str.split("").filter((n) => n != " ").length
}

function longestWord(str) {
    return str.split(" ").reduce((a,b) => a.length > b.length ? a : b)
}

textField.addEventListener("keyup", () => {
    wordCountDisplay.textContent = wordCount(textField.value)
    charCountDisplay.textContent = charCount(textField.value)
    longestWordDisplay.textContent = longestWord(textField.value)
})