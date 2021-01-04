const screenCalc = document.querySelector(".ecran");
/*
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");
*/
const mathOperators = document.querySelectorAll(".operateurs");
const equal = document.querySelector(".egal");
const allButtons = document.querySelector(".touchesCalculette").querySelectorAll("span");
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
dot.addEventListener("click", function (e) {
    const addDot = ".";
    if (!stringCalc.includes(".") && hasNumber(stringCalc)) {
        stringCalc = stringCalc.concat(addDot);
        showOnDisplay(stringCalc);
    }

});

// x et / au clavier
addEventListener("keypress", function (e) {
    if (e.key == "/" || e.key == "*") {
        if (stringCalc.length && stringCalc.slice(-1) !== "-") {
            addToStringArray();
            if (
                stringArray[stringArray.length - 1] !== "x" &&
                stringArray[stringArray.length - 1] !== "/"
            ) {
                pushInput(e.key);
            }
        } else {
            invalidInput();
        }
    }
});

mathOperators.forEach((item) => {
    item.addEventListener("click", function (e) {
        if (stringCalc.length && stringCalc.slice(-1) !== "-") {
            addToStringArray();
            if (
                stringArray[stringArray.length - 1] !== "x" &&
                stringArray[stringArray.length - 1] !== "/"
            ) {
                pushInput(item.innerHTML);
            }
        }
        else if (item.innerHTML == "-" && !stringCalc.includes("-")) {
            stringCalc = stringCalc.concat("-");
            showOnDisplay(stringCalc);
        }
        else {
            invalidInput();
        }
    });
});

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

equal.addEventListener("click", function () {
    addToStringArray();
    let finalString = stringArray.join(" ");
    finalString = finalString.replace(/x/g, "*");
    total = eval(finalString);
    showOnDisplay(Math.round((total + Number.EPSILON) * 10000) / 10000);
    stringArray = [];
    stringCalc = total.toString();
});

/*

PREMIERE VERSION CHIFFRES

one.addEventListener("click", function (e) {
    const addOne = 1;
    stringCalc = stringCalc.concat(addOne);
    screenCalc.innerHTML = stringCalc;
});

two.addEventListener("click", function (e) {
    const addTwo = 2;
    stringCalc = stringCalc.concat(addTwo);
    screenCalc.innerHTML = stringCalc;
});

three.addEventListener("click", function (e) {
    const addThree = 3;
    stringCalc = stringCalc.concat(addThree);
    screenCalc.innerHTML = stringCalc;
});

four.addEventListener("click", function (e) {
    const addFour = 4;
    stringCalc = stringCalc.concat(addFour);
    screenCalc.innerHTML = stringCalc;
});

five.addEventListener("click", function (e) {
    const addFive = 5;
    stringCalc = stringCalc.concat(addFive);
    screenCalc.innerHTML = stringCalc;
});

six.addEventListener("click", function (e) {
    const addSix = 6;
    stringCalc = stringCalc.concat(addSix);
    screenCalc.innerHTML = stringCalc;
});

seven.addEventListener("click", function (e) {
    const addSeven = 7;
    stringCalc = stringCalc.concat(addSeven);
    screenCalc.innerHTML = stringCalc;
});

eight.addEventListener("click", function (e) {
    const addEight = 8;
    stringCalc = stringCalc.concat(addEight);
    screenCalc.innerHTML = stringCalc;
});

nine.addEventListener("click", function (e) {
    const addNine = 9;
    stringCalc = stringCalc.concat(addNine);
    screenCalc.innerHTML = stringCalc;
});

zero.addEventListener("click", function (e) {
    const addZero = 0;
    stringCalc = stringCalc.concat(addZero);
    screenCalc.innerHTML = stringCalc;
});
*/
