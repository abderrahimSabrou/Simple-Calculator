// Variables
const currentInput = document.querySelector(".currentInput");
const answerScreen = document.querySelector(".answerScreen");
const buttons = document.querySelectorAll("button");
const erasebtn = document.querySelector("#erase");
const clearbtn = document.querySelector("#clear");
const evaluate = document.querySelector("#evaluate");

// Calculator Display
let realTimeScreenValue = [];

// Function to update the calculator display
function updateDisplay() {
  currentInput.innerHTML = realTimeScreenValue.join("");
  answerScreen.innerHTML = eval(realTimeScreenValue.join("")) || 0;
}

// Event listener for clear button
clearbtn.addEventListener("click", () => {
  realTimeScreenValue = [""];
  answerScreen.innerHTML = 0;
  currentInput.className = "currentInput";
  answerScreen.className = "answerScreen";
  answerScreen.style.color = "rgba(150, 150, 150, 0.87)";
});

// Event listener for buttons
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // When clicked button is not the erase button
    if (!btn.id.includes("erase")) {
      realTimeScreenValue.push(btn.value);
    }
    // When erase button is clicked
    else {
      realTimeScreenValue.pop();
    }

    // Update the display
    updateDisplay();

    // When clicked button is the evaluate button
    if (btn.id.includes("evaluate")) {
      currentInput.className = "answerScreen";
      answerScreen.className = "currentInput";
      answerScreen.style.color = "#818181";
    }
  });
});
