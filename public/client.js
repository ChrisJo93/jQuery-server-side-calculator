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
    multiply: false,
  };
  postInputs(numberInputs);
  console.log(firstNumber, secondNumber);
}

function postInputs(numbersToCalc) {
  $.ajax({
    type: 'POST',
    url: '/inputs',
    data: { numbers: numbersToCalc },
  })
    .then(function (response) {
      console.log('I have no idea what is happening');
    })
    .catch(function (err) {
      console.log(err);
      alert('fuck this is tough');
    });
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
