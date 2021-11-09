const charAmtRange = document.getElementById('charAmtRange')
const charAmtNumber = document.getElementById('charAmtNumber')

const includeUpperCaseElement = document.getElementById('includeUpperCase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')

/* Event listener for the form submission */
form.addEventListener('submit', e => {
    e.preventDefault()

    const charAmt = charAmtNumber.value
    const includeUpperCase = includeUpperCaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked

    const password = generatePassword(charAmt, includeUpperCase, includeNumbers, includeSymbols)
    passwordDisplayElement.value = password
});

/* Arrays of Character Codes */
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
)

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

/* Syncing range and number inputs together */
charAmtRange.addEventListener('input', syncCharAmt)
charAmtNumber.addEventListener('input', syncCharAmt)

function syncCharAmt(e) {
    const value = e.target.value
    charAmtRange.value = value
    charAmtNumber.value = value
}