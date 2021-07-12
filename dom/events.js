function reset() {
  firstNumber = null;
  operator = null;
  secondNumber = null;
  result = null;
  screen.innerHTML = "";
}

reset();

var firstNumber = null;
var operator = null;
var secondNumber = null;
var result = null;

var buttons = document.getElementsByClassName("button");
var screen = document.getElementById("screen");

function calculateResult() {
  if (secondNumber != null) {
    switch (operator) {
      case "+":
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
        break;
      case "*":
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
        break;
      case "-":
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
        break;
      case "÷":
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
        break;
    }
    screen.innerText = Math.round(result * 100) / 100;
    firstNumber = result;
    operator = null;
    secondNumber = null;
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    currentButton = buttons[i].innerText;
    if (!firstNumber) {
      if (!isNaN(currentButton) || currentButton == ".") {
        firstNumber = currentButton;
        screen.innerHTML += buttons[i].innerHTML;
      }
    } else if (!operator) {
      if (currentButton.match(/[-\*\+÷]/g)) {
        operator = currentButton;
        screen.innerHTML += buttons[i].innerHTML;
      } else if (!isNaN(currentButton) || currentButton == ".") {
        screen.innerHTML += buttons[i].innerHTML;
        firstNumber += currentButton;
      }
    } else if (!secondNumber) {
      if (!isNaN(currentButton)) {
        secondNumber = currentButton;
        screen.innerHTML += buttons[i].innerHTML;
      }
    } else if (secondNumber != null) {
      if (!isNaN(currentButton) || currentButton == ".") {
        secondNumber += currentButton;
        screen.innerHTML += buttons[i].innerHTML;
      }
    }
  });

  if (buttons[i].innerText == "=") {
    buttons[i].addEventListener("click", calculateResult);
  }
  if (buttons[i].innerText == "AC") {
    buttons[i].addEventListener("click", reset);
  }
}
