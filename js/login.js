let accountNumber;
let pinCode;

const myBkashAccountNumber = "01995468128";
const myBkashPin = 12345;
const loginButton = document.getElementById("loginButton");

let accountNumberError = document.getElementById("accountNumberError");
let pinError = document.getElementById("pinError");

loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  accountNumber = document.getElementById("accountNumber").value;
  pinCode = document.getElementById("pin_code").value;

  if (document.getElementById("accountNumber").value == "") {
    alert("please enter your bKash account number!");
  } else if (document.getElementById("pin_code").value == "") {
    alert("please enter your bKash pin!");
  } else {
    if (myBkashAccountNumber == accountNumber && myBkashPin == pinCode) {
      window.location.href = "index.html";
    } else if (myBkashAccountNumber != accountNumber) {
      alert("invalid account! please enter the correct account number");
    } else if (myBkashPin != pinCode) {
      alert("invalid pin! please enter the correct pin!");
    } else {
      alert("logic not found");
    }
  }
});
