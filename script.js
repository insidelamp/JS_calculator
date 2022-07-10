const calculators = document.querySelector(".calculator");
const buttons = calculators.querySelector(".calculatorBtn");
const resultDisplay = document.querySelector(".resultNumber");

function calculate(firstNumber, operator, lastNumber) {
  let result = 0;
  if (operator === "+") {
    result = Number(firstNumber) + Number(lastNumber);
  } else if (operator === "-") {
    result = Number(firstNumber) - Number(lastNumber);
  } else if (operator === "x") {
    result = Number(firstNumber) * Number(lastNumber);
  } else if (operator === "/") {
    result = Number(firstNumber) / Number(lastNumber);
  }
  return String(result);
}

let firstClickNumber = ""; // 처음들어오는값이 담기는변수
let operatorResult = ""; // 연산자가 담기는 변수
let lastClickNumber = ""; // 두번째 숫자가 담기는 변수
let resultCalculate = ""; // 연산한 결과가 담기는 변수

function buttonClick(event) {
  const target = event.target;
  const action = target.classList[0];
  const buttonContent = target.textContent;

  if (target.matches("button")) {
    if (action === "clickNumberBtn" || action === "decimal") {
      console.log("숫자버튼 " + buttonContent);
      if (firstClickNumber === "" && operatorResult === "") {
        if (buttonContent === "." && firstClickNumber === "") {
          firstClickNumber = "0" + buttonContent;
          resultDisplay.textContent = firstClickNumber;
        } else {
          firstClickNumber = buttonContent;
          resultDisplay.textContent = firstClickNumber;
        }
      } else if (firstClickNumber !== "" && operatorResult === "") {
        if (firstClickNumber !== "") {
          firstClickNumber = firstClickNumber + buttonContent;
          resultDisplay.textContent = firstClickNumber;
        } else {
          firstClickNumber = firstClickNumber + buttonContent;
          resultDisplay.textContent = firstClickNumber;
        }
      } else if (
        firstClickNumber !== "" &&
        operatorResult !== "" &&
        lastClickNumber === ""
      ) {
        if (
          buttonContent === "." &&
          operatorResult !== "" &&
          lastClickNumber === ""
        ) {
          lastClickNumber = "0" + buttonContent;
          resultDisplay.textContent =
            firstClickNumber + operatorResult + lastClickNumber;
        } else {
          lastClickNumber = buttonContent;
          resultDisplay.textContent =
            firstClickNumber + operatorResult + lastClickNumber;
        }
      } else if (
        firstClickNumber !== "" &&
        operatorResult !== "" &&
        lastClickNumber !== ""
      ) {
        if (
          firstClickNumber !== "" &&
          operatorResult !== "" &&
          lastClickNumber !== ""
        ) {
          lastClickNumber = lastClickNumber + buttonContent;
          resultDisplay.textContent =
            firstClickNumber + operatorResult + lastClickNumber;
        } else {
          lastClickNumber = lastClickNumber + buttonContent;
          resultDisplay.textContent =
            firstClickNumber + operatorResult + lastClickNumber;
        }
      }
    } else if (action === "rightClickBtn") {
      if (firstClickNumber !== "") {
        operatorResult = buttonContent;
        resultDisplay.textContent = firstClickNumber + operatorResult;
      }
    } else if (action === "topClickBtn") {
      if (buttonContent === "AC") {
        firstClickNumber = "";
        operatorResult = "";
        lastClickNumber = "";
        resultDisplay.textContent = "";
        resultCalculate = "";
      }
    } else if (action === "rightClickResultBtn") {
      if (resultCalculate === "") {
        resultDisplay.textContent = calculate(
          firstClickNumber,
          operatorResult,
          lastClickNumber
        );
        resultCalculate = resultDisplay.textContent;
      } else if (resultCalculate !== "") {
        resultDisplay.textContent = calculate(
          resultCalculate,
          operatorResult,
          lastClickNumber
        );
        resultCalculate = resultDisplay.textContent;
      } else if (
        resultCalculate !== "" &&
        resultCalculate === resultDisplay.textContent
      ) {
        resultDisplay.textContent = calculate(
          resultCalculate,
          operatorResult,
          lastClickNumber
        );
      }
    }
  }
}

buttons.addEventListener("click", buttonClick);
