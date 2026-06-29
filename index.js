let num = 0;
const numberDisplay = document.getElementById("numberDisplay");

function decrease() {
    num--;
    updateNumber();
}

function reset() {
    num = 0;
    updateNumber();
}

function increase() {
    num++;
    updateNumber();
}

function updateNumber() {
    numberDisplay.textContent = String(num);
}