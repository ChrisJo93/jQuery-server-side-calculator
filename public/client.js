$(document).ready(onReady);

function onReady() {
  $('.buttonAdd').on('click', addition);
  //   $('.buttonSubtract').on('click', subtraction);
  //   $('.buttonMultiply').on('click', multiplication);
  //   $('.buttonDivide').on('click', division);
  $('.buttonEquals').on('click', submitEquals);
  $('buttonClear').on('click', clear);
}
//DOM manipulation
function submitEquals() {
  let firstNumber = $('.firstInputField').val();
  let secondNumber = $('.secondInputField').val();
  const numberInputs = {
    firstNumber,
    secondNumber,
  };
  postInputs(numberInputs);
}

function addition(thing) {
  thing = '+';
  console.log('in thing', thing);
  submitEquals();
}
function subtraction() {
  console.log('sub works');
}
function multiplication() {
  console.log('multiply works');
}
function division() {
  console.log('division works');
}

function clear() {
  $('.firstInputField').val('');
  $('.secondInputField').val('');

  console.log('clear works');
}

//API Server calls

function postInputs(numbersToCalc) {
  $.ajax({
    type: 'POST',
    url: '/inputs',
    data: { numbers: numbersToCalc },
  })
    .then(function (response) {
      //response is "created"
      console.log('back to basics');
    })
    .catch(function (err) {
      console.log(err);
      alert('fuck this is tough');
    });
}
