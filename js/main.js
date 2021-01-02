const screenCalc = document.querySelector(".ecran");
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
const mathOperators = document.querySelectorAll(".operateurs");
const equal = document.querySelector(".egal");
const allButtons = document.getElementsByClassName("touchesCalculette");
const resetButton = document.querySelector(".reset");

let stringCalc = "";
let stringArray = [];
let total = 0;

function softReset(){
    stringCalc = "";
    screenCalc.innerHTML = stringCalc;

}

function hardReset(){
    softReset();
    stringArray = [];
}

function addToStringArray(){
    stringArray.push(stringCalc);
    console.log(stringArray);
    softReset();
}

mathOperators.forEach(item => {
    item.addEventListener("click", function(e){
        addToStringArray();
        stringArray.push(item.innerHTML);
        console.log(stringArray);
})});

one.addEventListener("click", function(e){
    const addOne = 1;
    stringCalc = stringCalc.concat(addOne);
    screenCalc.innerHTML = stringCalc;
});

two.addEventListener("click", function(e){
    const addTwo = 2;
    stringCalc = stringCalc.concat(addTwo);
    screenCalc.innerHTML = stringCalc;
});

three.addEventListener("click", function(e){
    const addThree = 3;
    stringCalc = stringCalc.concat(addThree);
    screenCalc.innerHTML = stringCalc;
});

four.addEventListener("click", function(e){
    const addFour = 4;
    stringCalc = stringCalc.concat(addFour);
    screenCalc.innerHTML = stringCalc;
});

five.addEventListener("click", function(e){
    const addFive = 5;
    stringCalc = stringCalc.concat(addFive);
    screenCalc.innerHTML = stringCalc;
});

six.addEventListener("click", function(e){
    const addSix = 6;
    stringCalc = stringCalc.concat(addSix);
    screenCalc.innerHTML = stringCalc;
});

seven.addEventListener("click", function(e){
    const addSeven = 7;
    stringCalc = stringCalc.concat(addSeven);
    screenCalc.innerHTML = stringCalc;
});

eight.addEventListener("click", function(e){
    const addEight = 8;
    stringCalc = stringCalc.concat(addEight);
    screenCalc.innerHTML = stringCalc;
});

nine.addEventListener("click", function(e){
    const addNine = 9;
    stringCalc = stringCalc.concat(addNine);
    screenCalc.innerHTML = stringCalc;
});

zero.addEventListener("click", function(e){
    const addZero = 0;
    stringCalc = stringCalc.concat(addZero);
    screenCalc.innerHTML = stringCalc;
});

resetButton.addEventListener("click", function(e){
    hardReset();
});

equal.addEventListener("click", function(){
    addToStringArray();
    let finalString = stringArray.join(" ");
    total = (eval(finalString));
    screenCalc.innerHTML = total;
    stringArray = [];
    stringCalc = total;
});