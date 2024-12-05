// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const userInput = document.getElementById("userInput1");
const copyButton = document.getElementById("copy");
const outputArea = document.getElementById("output1");
// add an event listener on the target element
copyButton.addEventListener("click", function () {
  outputArea.textContent = userInput.value;
  console.log("its taking", `${userInput.value}`);
});
// callback function to handle event

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const userInput2 = document.getElementById("userInput2");
const outputArea2 = document.getElementById("inputOutput");
// add an event listener on the target element
userInput2.addEventListener("input", function () {
  outputArea2.textContent = userInput2.value;
});
// callback function to handle event
