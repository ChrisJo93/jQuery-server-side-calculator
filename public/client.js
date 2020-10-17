$(document).ready(onReady);

function onReady() {
  $('.buttonAdd').on('click', addition);
  $('.buttonSubtract').on('click', subtraction);
  $('.buttonMultiply').on('click', multiplication);
  $('.buttonDivide').on('click', division);
  $('.buttonEquals').on('click', submitEquals);
  $('buttonClear').on('click', clear);
}

function submitEquals() {
  let firstNumber = $('.firstInputField').val();
  let secondNumber = $('.secondInputField').val();
  const numberInputs = {
    firstNumber,
    secondNumber,
    add: false,
    subtract: false,
    division: false,
    muliply: false,
  };
  console.log(firstNumber, secondNumber);
}

function addition() {
  console.log('add works');
}
function subtraction() {
  console.log('sub works');
}
function multiplication() {
  console.log('mulitply works');
}
function division() {
  console.log('division works');
}

function clear() {
  console.log('clear works');
}
