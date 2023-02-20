// global scope variable
var num1 = 10;

function addNumber() {
  // func/local scope variable
  var randomNum = Math.round(Math.random() * 100);

  randomNum2 = Math.round(Math.random() * 100);

  console.log('addNumberFunc - Number 1', num1);
  console.log('addNumberFunc - Random Number ', randomNum);

  num1 += randomNum;
}

addNumber();

console.log('Number 1', num1);
console.log('Random Number 2', randomNum2);
console.log('Random Number ', randomNum);

// hoisting in js
var randomNum2;
