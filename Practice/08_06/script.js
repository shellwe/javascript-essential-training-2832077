/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */



function addCustomClass(someClass) {
    document.querySelector("main").classList.add(someClass)
}

addCustomClass("testing")

const addText = function (someText) {
    document.querySelector("main").innerHTML = someText;
}

addText("Here is the text that goes in here!");

const addId = () => {
    document.querySelector("main").innerHTML = someText;
}

addId();