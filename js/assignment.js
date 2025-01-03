"use strict";

// Create your references to the html elements here
const ageInputEl = document.getElementById("age-input")
const submissionBtn = document.getElementById("submission-btn");
const paragraph = document.getElementById("response");
// create a mutable variable called age and do not assign it a value.
let age;

function checkAgeAndRespond() {
    age = parseInt(ageInputEl.value);
    let answerOutput = document.getElementById("answer-display");
    // Write your code below
    // if(age >= 21){
    //     console.log("You can vote and purchase alcohol.");
    // } else if(age >= 18 && age < 21) {
    //     console.log("You can vote, but you cannot purchase alcohol.");
    // } else {
    //     console.log("You cannot vote and you cannot purchase alcohol.");
    // };

    // ternary operator start
    let areYouOldEnough = age >=21 ? "You can vote and purchase alcohol"
    : age >=18 && age < 21 ? "You can vote, but you cannot purchase alcohol"
    : "You cannot vote and you cannot purchase alcohol.";
    answerOutput.innerText = areYouOldEnough;
};



submissionBtn.addEventListener("click", function () {
    checkAgeAndRespond();
});

// ask questions about this
function validateInput(event) {
    const invalidCharacters = ["e", "E", "-", "0", "+"];
    if (invalidCharacters.includes(event.key)) {
        event.preventDefault();
    }
}

ageInputEl.addEventListener("keydown", validateInput);
