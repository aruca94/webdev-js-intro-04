// Prevent us from attempting to use variables
// that are not declared
"use strict"


// let healthPoints = 15;


function healthStatus(num) {
if (num >= 10) {
    console.log("Hero is healthy.");
} else if (num < 10 && num >= 5) {
    console.log("Hero is slightly damaged.");
} else {
    console.log("Hero is close to death.");
}

}