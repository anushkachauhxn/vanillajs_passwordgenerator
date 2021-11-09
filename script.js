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

/* Syncing range and number inputs together */
charAmtRange.addEventListener('input', syncCharAmt)
charAmtNumber.addEventListener('input', syncCharAmt)

function syncCharAmt(e) {
    const value = e.target.value
    charAmtRange.value = value
    charAmtNumber.value = value
}