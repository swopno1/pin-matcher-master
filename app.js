// Create a random number
function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";

  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const pin = getPin();

  document.getElementById("display-pin").value = pin;
}

document.getElementById("keypad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const calcInput = document.getElementById("input-numbers");
  if (isNaN(number)) {
    console.log(number);
    if (number == "C") {
      calcInput.value = "";
    }
  } else {
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
});