var firstNumber = null;
var operator = null;
var secondNumber = null;
var result = null;

var buttons = document.getElementsByClassName("button");
var screen = document.getElementById("screen");

function calculateResult(){
    if(secondNumber != null){
        switch(operator){
            case "+":
                result = parseInt(firstNumber) + parseInt(secondNumber);
                break;
        }
        screen.innerText = result;
    }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    screen.innerHTML = buttons[i].innerHTML;

    if (!firstNumber) {
      firstNumber = buttons[i].innerText;
    } else if (!operator) {
      operator = buttons[i].innerText;
    } else if (!secondNumber) {
      secondNumber = buttons[i].innerText;
    }
  });

  if (buttons[i].innerText == "=") {
    buttons[i].addEventListener("click", calculateResult)
  }
}
