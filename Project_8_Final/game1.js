// Bijan Emami 5/13/2021

"use strict";

// Greet user and ask for name.

let user = prompt("Hi there, please enter your name to begin.");

// welcome the user with their name

alert("Welcome " + user);

let doYouLike = confirm("Do you like JavaScript?");

let myImage = document.getElementById("myImage");

let imageMessage = document.getElementById("jsMessage");

console.log(doYouLike)

while (!doYouLike) {
imageMessage.innerHTML = "Bummer, " + user + "! I cannot believe you don't like JavaScript!"
myImage.src = "dumbdude.jpeg";
break
}
while (doYouLike) {
imageMessage.innerHTML = "That is awesome, " + user + "! Liking JavaScript is the way to GO!"

myImage.src = "oldman.png";
break
}
// EventListener for calculate button

let btnCalculate = document.querySelector("#calculate");

btnCalculate.addEventListener("click", () => select());

// Function for math example portion
function select() {
let operator = document.getElementById("operator");
let selected = operator.options[operator.selectedIndex].text;

// switch requirement
switch (selected) {
case "+ add":
add(num1, num2);
break;
case "- subtract":
subtract(num1, num2);
break;
case "* multiply":
multiply(num1, num2);
break;
case "/ divide":
divide(num1, num2);
break;
case "% modulus":
modulus(num1, num2);
break;
case "** power":
power(num1, num2);
break;
default:
alert("Please select an operator.");
break;
}
}

// addition function

function add(num1, num2) {
let sum =
Number(document.getElementById("num1").value) +
Number(document.getElementById("num2").value);
document.getElementById("answer").textContent = sum;
console.log(sum);
return sum;
}

// subtraction function

function subtract(num1, num2) {
let diff =
document.getElementById("num1").value -
document.getElementById("num2").value;
document.getElementById("answer").textContent = diff;
console.log(diff);
return diff;
}

// multiplication function

function multiply(num1, num2) {
let total =
document.getElementById("num1").value *
document.getElementById("num2").value;
document.getElementById("answer").textContent = total;
console.log(total);
return total;
}

// division function

function divide(num1, num2) {
let result =
document.getElementById("num1").value /
document.getElementById("num2").value;
document.getElementById("answer").textContent = result;
console.log(result);
return result;
}

// modulus function

function modulus(num1, num2) {
let mod =
document.getElementById("num1").value %
document.getElementById("num2").value;
document.getElementById("answer").textContent = mod;
console.log(mod);
return mod;
}

// power function

function power(num1, num2) {
let pow =
document.getElementById("num1").value **
document.getElementById("num2").value;
document.getElementById("answer").textContent = pow;
console.log(pow);
return pow;
}

// comparison problem

// function calls
var comparisonScore = 0;

question1();
question2();
question3();
question4();

// question functions

function question1() {
let btnTrue = document.querySelector("#True1");
let btnFalse = document.querySelector("#False1");

btnTrue.addEventListener("click", () => correct());
btnFalse.addEventListener("click", () => wrong());

function correct() {
btnTrue.style.backgroundColor = "#008000";
document.getElementById("q1").textContent = "Correct";

console.log("correct");

comparisonScore += 1;  // += operator and score count
var score1 = document.getElementById("score1");
score1.textContent = comparisonScore;
}

function wrong() {
btnFalse.style.backgroundColor = "#FF0000";
document.getElementById("q1").textContent = "Wrong";

console.log("wrong");
}
}

function question2() {
let btnTrue = document.querySelector("#True2");
let btnFalse = document.querySelector("#False2");

btnTrue.addEventListener("click", () => wrong());
btnFalse.addEventListener("click", () => correct());

function correct() {
btnFalse.style.backgroundColor = "#008000";
document.getElementById("q2").textContent = "Correct";

console.log("correct");

comparisonScore += 1;  // += operator and score count
var score1 = document.getElementById("score1");
score1.textContent = comparisonScore;
}

function wrong() {
btnTrue.style.backgroundColor = "#FF0000";
document.getElementById("q2").textContent = "Wrong";

console.log("wrong");
}
}

function question3() {
let btnTrue = document.querySelector("#True3");
let btnFalse = document.querySelector("#False3");

btnTrue.addEventListener("click", () => correct());
btnFalse.addEventListener("click", () => wrong());

function correct() {
btnTrue.style.backgroundColor = "#008000";
document.getElementById("q3").textContent = "Correct";

console.log("correct");

comparisonScore += 1;  // += operator and score count
var score1 = document.getElementById("score1");
score1.textContent = comparisonScore;
}

function wrong() {
btnFalse.style.backgroundColor = "#FF0000";
document.getElementById("q3").textContent = "Wrong";

console.log("wrong");
}
}

function question4() {
let btnTrue = document.querySelector("#True4");
let btnFalse = document.querySelector("#False4");

btnTrue.addEventListener("click", () => wrong());
btnFalse.addEventListener("click", () => correct());

function correct() {
btnFalse.style.backgroundColor = "#008000";
document.getElementById("q4").textContent = "Correct";

console.log("correct");

comparisonScore += 1;  // += operator and score count
var score1 = document.getElementById("score1");
score1.textContent = comparisonScore;
}

function wrong() {
btnTrue.style.backgroundColor = "#FF0000";
document.getElementById("q4").textContent = "Wrong";

console.log("wrong");
}
}

// array to display random message for correct answers

function goodJob() {
let goodJobMessage = [
"Great job!!",
"Nailed it!!",
"That is correct!!",
"Literal genius!!",
"Nothing gets past you!!",
];

let randomMessage = Math.floor(Math.random() * goodJobMessage.length);

let message = goodJobMessage[randomMessage];

return message;

console.log(goodJob());
}

// Pop Quiz stuff

// if else statements
var quizScore = 0;  //score counter for quiz

popQuiz1(); // function calls
popQuiz2();
popQuiz3();
popQuiz4();

function popQuiz1() {
let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => popQuiz1(), false);

if (document.getElementById("a2").checked) {
quizScore += 1;  // score update
var score2 = document.getElementById("score2");
score2.textContent = quizScore;  // score updates
document.getElementById("msg1").textContent = goodJob(); // displays goodJob array message

let quizOneQuestions = document.querySelectorAll(".quiz1");
quizOneQuestions.forEach((question) => {
question.parentElement.classList.remove("wrong-answer");
});
} else if (
document.getElementById("a1").checked ||
document.getElementById("a3").checked ||
document.getElementById("a4").checked
) {
// || or operator
quizScore -= 1;  // score update
var score2 = document.getElementById("score2");
score2.textContent = quizScore;  // score updates
let checked = document.querySelector("input[name=quiz1]:checked");
checked.parentElement.classList.add("wrong-answer");
document.getElementById("msg1").textContent = "Try again!!";
}
}

// second question

function popQuiz2() {
let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => popQuiz2(), false);

if (document.getElementById("b4").checked) {
quizScore += 1;  // score update
var score2 = document.getElementById("score2");
score2.textContent = quizScore;  // score updates
let quizOneQuestions = document.querySelectorAll(".quiz2");
quizOneQuestions.forEach((question) => {
question.parentElement.classList.remove("wrong-answer");
});
document.getElementById("msg2").textContent = goodJob(); // displays goodJob array message

} else if (
document.getElementById("b1").checked ||
document.getElementById("b2").checked ||
document.getElementById("b3").checked
) {
// || or operator
quizScore -= 1;  // score update
var score2 = document.getElementById("score2");
score2.textContent = quizScore;  // score updates
let checked = document.querySelector("input[name=quiz2]:checked");
checked.parentElement.classList.add("wrong-answer");
document.getElementById("msg2").textContent = "Try again!!";
}
}

// third question

function popQuiz3() {
let btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", () => popQuiz3(), false);

if (document.getElementById("c1").checked) {
quizScore += 1;  // score update
var score2 = document.getElementById("score2");
score2.textContent = quizScore;  // score updates
document.getElementById("c2-li").className = "";
document.getElementById("c3-li").className = "";
document.getElementById("c4-li").className = "";
document.getElementById("msg3").textContent = goodJob(); // displays goodJob array message

} else if (
document.getElementById("c2").checked ||
document.getElementById("c3").checked ||
document.getElementById("c4").checked
) {
// || or operator
quizScore -= 1;  // score update
var score2 = document.getElementById("score2");
score2.textContent = quizScore;  // score updates
if (document.getElementById("c2").checked) {
document.getElementById("c2-li").className = "wrong-answer";
}
if (document.getElementById("c3").checked) {
document.getElementById("c3-li").className = "wrong-answer";
}

if (document.getElementById("c4").checked) {
document.getElementById("c4-li").className = "wrong-answer";
}
document.getElementById("msg3").textContent = "Try again!!";
}
}

// fourth question

function popQuiz4() {
let btn4 = document.querySelector("#btn4");

btn4.addEventListener("click", () => popQuiz4(), false);

if (document.getElementById("d2").checked) {
quizScore += 1;  // score update
var score2 = document.getElementById("score2");
score2.textContent = quizScore;  // score updates
let quizOneQuestions = document.querySelectorAll(".quiz4");
quizOneQuestions.forEach((question) => {
question.classList.remove("wrong-answer");
});
document.getElementById("msg4").textContent = goodJob(); // displays goodJob array message


if ( (score1.textContent == 4) && (score2.textContent == 4) ){  // && operator and final score output
    var finalScore = document.getElementById("finalScore");
    finalScore.textContent = quizScore + comparisonScore + " Great Job!";  
}
else
{
    var finalScore = document.getElementById("finalScore");
    finalScore.textContent = quizScore + comparisonScore + " Maybe next time."
}
} else if (
document.getElementById("d1").checked ||
document.getElementById("d3").checked ||
document.getElementById("d4").checked
) {
// || or operator
// let checked = document.querySelector("input[name=quiz4]:checked");
// document.getElementById()
// checked.parentElement.classList.add("wrong-answer");

quizScore -= 1;  // score update and -= operator
var score2 = document.getElementById("score2");
score2.textContent = quizScore;  // score updates
if (document.getElementById("d1").checked) {
document.getElementById("d1-li").classList.add("wrong-answer");
}
if (document.getElementById("d3").checked) {
document.getElementById("d3-li").classList.add("wrong-answer");
}
if (document.getElementById("d4").checked) {
document.getElementById("d4-li").classList.add("wrong-answer");
}
document.getElementById("msg4").textContent = "Try again!!";
}

}


// getElementsByTagName and "for" to iterate through tags
// also ++ is used in "for" loop

var spanColor = document.getElementsByTagName("span");

for (var i = 0; i < spanColor.length; i++) {
spanColor[i].style.color = "purple";
}

// getElementsByClassName and change background of <div> element with className "math"

var classColor = document.getElementsByClassName("math");
for (var i = 0; i < classColor.length; i++) {
classColor[i].style.backgroundColor = "lightblue";
}

var classColor = document.getElementsByClassName("comparison");
for (var i = 0; i < classColor.length; i++) {
classColor[i].style.backgroundColor = "cornsilk";
}

var classColor = document.getElementsByClassName("quiz");
for (var i = 0; i < classColor.length; i++) {
classColor[i].style.backgroundColor = "lightblue";
}






