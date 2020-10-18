$(document).ready(onReady);

function onReady() {
  $('.buttonAdd').on('click', operation);
  $('.buttonSubtract').on('click', operation);
  $('.buttonDivide').on('click', operation);
  $('.buttonMultiply').on('click', operation);
  $('.buttonEquals').on('click', submitEquals);
  $('buttonClear').on('click', clear);
}
//DOM manipulation
let operator = '';

function submitEquals() {
  let firstNumber = $('.firstInputField').val();
  let secondNumber = $('.secondInputField').val();
  const numberInputs = {
    firstNumber,
    secondNumber,
    operator,
  };
  postInputs(numberInputs);
  clear();
}

function operation() {
  operator = $(this).prop('value');
}

function clear() {
  $('.firstInputField').val('');
  $('.secondInputField').val('');
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
