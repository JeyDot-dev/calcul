const screenCalc = document.querySelector(".ecran");
const mathOperators = document.querySelectorAll(".operateurs");
const equal = document.querySelector(".egal");
const allButtons = document
    .querySelector(".touchesCalculette")
    .querySelectorAll("span");
const resetButton = document.querySelector(".reset");
const dot = document.querySelectorAll(".touchesBas")[1];

let stringCalc = "";
let stringArray = [];
let total = 0;

function showOnDisplay(string) {
    screenCalc.innerHTML = string;
}

function invalidInput() {
    screenCalc.style.fontSize = "small";
    screenCalc.style.color = "rgb(218, 168, 170)";
    showOnDisplay("use a valid input!");
    setTimeout(function () {
        screenCalc.style.fontSize = null;
        screenCalc.style.color = null;
        showOnDisplay(stringCalc);
    }, 1250);
}

function softReset() {
    stringCalc = "";
    showOnDisplay(stringCalc);
}

function hardReset() {
    softReset();
    stringArray = [];
}

function addToStringArray() {
    stringArray.push(stringCalc);
    console.log(stringArray);
    softReset();
}

function hasNumber(s) {
    return /\d/.test(s);
}

function pushInput(input) {
    stringArray.push(input);
    console.log(stringArray);
}

function resolve() {
    addToStringArray();
    let finalString = stringArray.join(" ");
    finalString = finalString.replace(/x/g, "*");
    total = eval(finalString);
    showOnDisplay(Math.round((total + Number.EPSILON) * 10000) / 10000);
    stringArray = [];
    stringCalc = total.toString();
}

// "click . "
dot.addEventListener("click", function (e) {
    if (!stringCalc.includes(".") && hasNumber(stringCalc)) {
        stringCalc = stringCalc.concat(dot.innerHTML);
        showOnDisplay(stringCalc);
    }
});

// "clavier . "
window.addEventListener("keypress", function (e) {
    if (e.key === ".") {
        if (!stringCalc.includes(".") && hasNumber(stringCalc)) {
            stringCalc = stringCalc.concat(dot.innerHTML);
            showOnDisplay(stringCalc);
        }
    }
});
// "clavier + * / - "
window.addEventListener("keypress", function (e) {
    if (e.key === "/" || e.key === "*" || e.key === "+" || e.key === "-") {
        if (stringCalc.length && stringCalc.slice(-1) !== "-") {
            addToStringArray();
            pushInput(e.key);
        }
        //nombres négatifs
        else if (e.key == "-" && !stringCalc.includes("-")) {
            stringCalc = stringCalc.concat("-");
            showOnDisplay(stringCalc);
        } else {
            invalidInput();
        }
    }
});

// "click + * / - "
mathOperators.forEach((item) => {
    item.addEventListener("click", function (e) {
        if (stringCalc.length && stringCalc.slice(-1) !== "-") {
            addToStringArray();
            pushInput(item.innerHTML);
        }
        //nombres négatifs
        else if (item.innerHTML == "-" && !stringCalc.includes("-")) {
            stringCalc = stringCalc.concat("-");
            showOnDisplay(stringCalc);
        } else {
            invalidInput();
        }
    });
});

// "clavier chiffres"
window.addEventListener("keypress", function (e) {
    if (e.key >= 0 && e.key <= 9) {
        stringCalc = stringCalc.concat(e.key);
        showOnDisplay(stringCalc);
    }
});

// "click chiffres"
allButtons.forEach((item) => {
    if (item.innerHTML >= 0 && item.innerHTML <= 9) {
        item.addEventListener("click", function (e) {
            stringCalc = stringCalc.concat(item.innerHTML);
            showOnDisplay(stringCalc);
        });
    }
});

resetButton.addEventListener("click", function (e) {
    hardReset();
});
window.addEventListener("keydown", function (e){
    if (e.key == "Delete"){
        hardReset();
    }
});
window.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        resolve();
    }
});
equal.addEventListener("click", function () {
    resolve();
});