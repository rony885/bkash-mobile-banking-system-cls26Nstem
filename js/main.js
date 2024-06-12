const myBkashPin = 12345;

let totalBalanceValueNumber;
let cashInInputValueNumber;
let cashOutInputValueNumber;
let sendMoneyInputValueNumber;
let mobileRechargeInputValueNumber;

let totalBalance = document.getElementById("total_balance");

let cashInButton = document.getElementById("cash_in_button");
let cashOutButton = document.getElementById("cash_out_button");
let sendMoneyButton = document.getElementById("send_money_button");
let mobileRechargeButton = document.getElementById("mobile_recharge_button");

let cashInInput = document.getElementById("cash_in_input");
let cashOutInput = document.getElementById("cash_out_input");
let sendMoneyInput = document.getElementById("send_money_input");
let mobileRechargeInput = document.getElementById("mobile_recharge_input");
let mobileNumberInput = document.getElementById("mobile_number_input");
let mobileOperatorInput = document.getElementById("mobile_operator_input");
let pinCodeInput1 = document.getElementById("pin_code_input_1");
let pinCodeInput2 = document.getElementById("pin_code_input_2");
let pinCodeInput3 = document.getElementById("pin_code_input_3");

cashInButton.addEventListener("click", function () {
  totalBalanceValueNumber = parseFloat(totalBalance.innerText);
  cashInInputValueNumber = parseFloat(cashInInput.value);

  if (cashInInput.value == "") {
    alert("please enter an amount!");
  } else if (cashInInput.value <= 0) {
    alert("invalid amount! please enter a correct amount");
  } else {
    totalBalance.innerHTML = totalBalanceValueNumber + cashInInputValueNumber;
    cashInInput.value = "";
  }
});

cashOutButton.addEventListener("click", function () {
  totalBalanceValueNumber = parseFloat(totalBalance.innerText);
  cashOutInputValueNumber = parseFloat(cashInInput.value);

  if (cashOutInput.value == "") {
    alert("please enter an amount!");
  } else if (cashOutInput.value <= 0) {
    alert("invalid amount! please enter a correct amount");
  } else if (cashOutInput.value > totalBalanceValueNumber) {
    alert("insufficient balance!");
  } else {
    if (cashOutInput.value == "") {
      alert("please enter an amount!");
    } else if (pinCodeInput1.value == "") {
      alert("please enter your bKash pin!");
    } else if (myBkashPin != pinCodeInput1.value) {
      alert("invalid pin! please enter the correct pin!");
    } else if (myBkashPin == pinCodeInput1.value) {
      totalBalance.innerHTML =
        totalBalanceValueNumber - cashOutInputValueNumber;
      cashOutInput.value = "";

      alert("cash out successful!");
    } else {
      alert("logic not found!");
    }
  }
});

sendMoneyButton.addEventListener("click", function () {
  totalBalanceValueNumber = parseFloat(totalBalance.innerText);
  sendMoneyInputValueNumber = parseFloat(sendMoneyInput.value);

  if (sendMoneyInput.value == "") {
    alert("please enter an amount!");
  } else if (sendMoneyInput.value <= 0) {
    alert("invalid amount! please enter a correct amount");
  } else if (sendMoneyInput.value > totalBalanceValueNumber) {
    alert("insufficient balance!");
  } else {
    if (sendMoneyInput.value == "") {
      alert("please enter an amount!");
    } else if (pinCodeInput2.value == "") {
      alert("please enter your bKash pin!");
    } else if (myBkashPin != pinCodeInput2.value) {
      alert("invalid pin! please enter the correct pin!");
    } else if (myBkashPin == pinCodeInput2.value) {
      totalBalance.innerHTML =
        totalBalanceValueNumber - sendMoneyInputValueNumber;
      sendMoneyInput.value = "";

      alert("send money successful!");
    } else {
      alert("logic not found!");
    }
  }
});

mobileRechargeButton.addEventListener("click", function () {
  totalBalanceValueNumber = parseFloat(totalBalance.innerText);
  mobileRechargeInputValueNumber = parseFloat(mobileRechargeInput.value);

  if (mobileNumberInput.value == "") {
    alert("please enter your mobile number!");
  } else {
    if (
      mobileNumberInput.value[2] == 0 ||
      mobileNumberInput.value[2] == 1 ||
      mobileNumberInput.value[2] == 2 ||
      mobileNumberInput.value.length > 11
    ) {
      alert("invalid mobile number format! please enter correct number");
    } else {
      if (mobileOperatorInput.value == "") {
        alert("please enter your mobile operator!");
      } else if (
        mobileNumberInput.value[2] == 3 &&
        mobileOperatorInput.value != "grameenphone"
      ) {
        alert(
          "mobile number and operator doesn’t match! please enter the correct number OR operator"
        );
      } else if (
        mobileNumberInput.value[2] == 7 &&
        mobileOperatorInput.value != "grameenphone"
      ) {
        alert(
          "mobile number and operator doesn’t match! please enter the correct number OR operator"
        );
      } else if (
        mobileNumberInput.value[2] == 4 &&
        mobileOperatorInput.value != "banglalink"
      ) {
        alert(
          "mobile number and operator doesn’t match! please enter the correct number OR operator"
        );
      } else if (
        mobileNumberInput.value[2] == 9 &&
        mobileOperatorInput.value != "banglalink"
      ) {
        alert(
          "mobile number and operator doesn’t match! please enter the correct number OR operator"
        );
      } else if (
        mobileNumberInput.value[2] == 8 &&
        mobileOperatorInput.value != "robi"
      ) {
        alert(
          "mobile number and operator doesn’t match! please enter the correct number OR operator"
        );
      } else if (
        mobileNumberInput.value[2] == 6 &&
        mobileOperatorInput.value != "airtel"
      ) {
        alert(
          "mobile number and operator doesn’t match! please enter the correct number OR operator"
        );
      } else if (
        mobileNumberInput.value[2] == 5 &&
        mobileOperatorInput.value != "teletalk"
      ) {
        alert(
          "mobile number and operator doesn’t match! please enter the correct number OR operator"
        );
      } else if (
        mobileNumberInput.value[2] == 3 ||
        (mobileNumberInput.value[2] == 7 &&
          mobileOperatorInput.value == "grameenphone")
      ) {
        if (mobileRechargeInput.value == "") {
          alert("please enter your recharge amount!");
        } else if (mobileRechargeInput.value <= 0) {
          alert("invalid amount! please enter a correct amount");
        } else if (mobileRechargeInput.value > totalBalanceValueNumber) {
          alert("insufficient balance!");
        } else {
          if (mobileRechargeInput.value == "") {
            alert("please enter your recharge amount!");
          } else if (pinCodeInput3.value == "") {
            alert("please enter your bKash pin!");
          } else if (myBkashPin != pinCodeInput3.value) {
            alert("invalid pin! please enter the correct pin!");
          } else if (myBkashPin == pinCodeInput3.value) {
            totalBalance.innerHTML =
              totalBalanceValueNumber - mobileRechargeInputValueNumber;
            mobileRechargeInput.value = "";

            alert("grameenphone mobile recharge successful!");
          } else {
            alert("logic not found!");
          }
        }
      } else if (
        mobileNumberInput.value[2] == 4 ||
        (mobileNumberInput.value[2] == 9 &&
          mobileOperatorInput.value == "banglalink")
      ) {
        if (mobileRechargeInput.value == "") {
          alert("please enter your recharge amount!");
        } else if (mobileRechargeInput.value <= 0) {
          alert("invalid amount! please enter a correct amount");
        } else if (mobileRechargeInput.value > totalBalanceValueNumber) {
          alert("insufficient balance!");
        } else {
          if (mobileRechargeInput.value == "") {
            alert("please enter your recharge amount!");
          } else if (pinCodeInput3.value == "") {
            alert("please enter your bKash pin!");
          } else if (myBkashPin != pinCodeInput3.value) {
            alert("invalid pin! please enter the correct pin!");
          } else if (myBkashPin == pinCodeInput3.value) {
            totalBalance.innerHTML =
              totalBalanceValueNumber - mobileRechargeInputValueNumber;
            mobileRechargeInput.value = "";

            alert("banglalink mobile recharge successful!");
          } else {
            alert("logic not found!");
          }
        }
      } else if (
        mobileNumberInput.value[2] == 8 &&
        mobileOperatorInput.value == "robi"
      ) {
        if (mobileRechargeInput.value == "") {
          alert("please enter your recharge amount!");
        } else if (mobileRechargeInput.value <= 0) {
          alert("invalid amount! please enter a correct amount");
        } else if (mobileRechargeInput.value > totalBalanceValueNumber) {
          alert("insufficient balance!");
        } else {
          if (mobileRechargeInput.value == "") {
            alert("please enter your recharge amount!");
          } else if (pinCodeInput3.value == "") {
            alert("please enter your bKash pin!");
          } else if (myBkashPin != pinCodeInput3.value) {
            alert("invalid pin! please enter the correct pin!");
          } else if (myBkashPin == pinCodeInput3.value) {
            totalBalance.innerHTML =
              totalBalanceValueNumber - mobileRechargeInputValueNumber;
            mobileRechargeInput.value = "";

            alert("robi mobile recharge successful!");
          } else {
            alert("logic not found!");
          }
        }
      } else if (
        mobileNumberInput.value[2] == 6 &&
        mobileOperatorInput.value == "airtel"
      ) {
        if (mobileRechargeInput.value == "") {
          alert("please enter your recharge amount!");
        } else if (mobileRechargeInput.value <= 0) {
          alert("invalid amount! please enter a correct amount");
        } else if (mobileRechargeInput.value > totalBalanceValueNumber) {
          alert("insufficient balance!");
        } else {
          if (mobileRechargeInput.value == "") {
            alert("please enter your recharge amount!");
          } else if (pinCodeInput3.value == "") {
            alert("please enter your bKash pin!");
          } else if (myBkashPin != pinCodeInput3.value) {
            alert("invalid pin! please enter the correct pin!");
          } else if (myBkashPin == pinCodeInput3.value) {
            totalBalance.innerHTML =
              totalBalanceValueNumber - mobileRechargeInputValueNumber;
            mobileRechargeInput.value = "";

            alert("airtel mobile recharge successful!");
          } else {
            alert("logic not found!");
          }
        }
      } else if (
        mobileNumberInput.value[2] == 5 &&
        mobileOperatorInput.value == "teletalk"
      ) {
        if (mobileRechargeInput.value == "") {
          alert("please enter your recharge amount!");
        } else if (mobileRechargeInput.value <= 0) {
          alert("invalid amount! please enter a correct amount");
        } else if (mobileRechargeInput.value > totalBalanceValueNumber) {
          alert("insufficient balance!");
        } else {
          if (mobileRechargeInput.value == "") {
            alert("please enter your recharge amount!");
          } else if (pinCodeInput3.value == "") {
            alert("please enter your bKash pin!");
          } else if (myBkashPin != pinCodeInput3.value) {
            alert("invalid pin! please enter the correct pin!");
          } else if (myBkashPin == pinCodeInput3.value) {
            totalBalance.innerHTML =
              totalBalanceValueNumber - mobileRechargeInputValueNumber;
            mobileRechargeInput.value = "";

            alert("teletalk mobile recharge successful!");
          } else {
            alert("logic not found!");
          }
        }
      }
    }
  }
});
