const charAmtRange = document.getElementById('charAmtRange')
const charAmtNumber = document.getElementById('charAmtNumber')

/* Syncing range and number inputs together */
charAmtRange.addEventListener('input', syncCharAmt)
charAmtNumber.addEventListener('input', syncCharAmt)

function syncCharAmt(e) {
    const value = e.target.value
    charAmtRange.value = value
    charAmtNumber.value = value
}