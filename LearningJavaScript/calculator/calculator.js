console.log(1);
let value1 = "0";
let value2 = "0";
const signs = {"+":0, "-":0, "*":0, "/":0};

const screen = document.querySelector(".screen");
screen.innerHTML = value1;
const numsList = [];

const numsButton = document.querySelectorAll(".bt");
numsButton.forEach((numsbt) => {
  console.log(numsbt.innerHTML);
  if (
    !isNaN(parseInt(numsbt.innerHTML)) &&
    typeof parseInt(numsbt.innerHTML, 10) === "number"
  ) {
    numsbt.addEventListener("click", (e) => {
      console.log("numberValue = ", parseInt(numsbt.innerHTML, 10));
      if (value1 === "0") {
        value1 = e.target.innerHTML;
      } else {
        value1 += e.target.innerHTML;
      }
      screen.innerHTML = value1;
    });
  } else if (numsbt.innerHTML === "C") {
    numsbt.addEventListener("click", (e) => {
      console.log("C is Click!!!");
      numsList.pop();
      value1 = "0";
      screen.innerHTML = value1;
    });
  } else if (numsbt.innerHTML in signs) {
    console.log("signs are clicked !");
    numsbt.addEventListener("click", (e) => {
      console.log("signs are clicked !");
      numsList.push(parseInt(value1, 10));
      numsList.push(numsbt.innerHTML);
      value1 = "0";
      screen.innerHTML = value1;
    });
  } else if (numsbt.innerHTML === "=") {
    numsbt.addEventListener("click", (e) => {
      numsList.push(parseInt(value1, 10));
      console.log(numsList);
      while (numsList.length > 1) {
        let num1 = numsList.shift();
        let sign = numsList.shift();
        let num2 = numsList.shift();
        let result = 0;
        if (sign === "+") {
          result = num1 + num2;
        } else if (sign === "-") {
          result = num1 - num2;
        } else if (sign === "*") {
          result = num1 * num2;
        } else {
          result = num1 / num2;
        }
        numsList.unshift(result);
      }
      value1 = numsList.pop();
      screen.innerHTML = value1;
    });
  }
});

// ===========================================================================================================
// callback function
const calculate = () => {
  console.log(numsList);
  while (numsList.length > 1) {
    let num1 = numsList.shift();
    let sign = numsList.shift();
    let num2 = numsList.shift();
    let result = 0;
    if (sign === "+") {
      result = num1 + num2;
    } else if (sign === "-") {
      result = num1 - num2;
    } else if (sign === "*") {
      result = num1 * num2;
    } else {
      result = num1 / num2;
    }
    numsList.unshift(result);
  }
};
