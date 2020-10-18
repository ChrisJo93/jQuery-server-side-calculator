$(document).ready(onReady);

function onReady() {
  $('.buttonEquals').on('click', submitEquals);
  $('buttonClear').on('click', clear);
}
//DOM manipulation
function submitEquals() {
  let firstNumber = $('.firstInputField').val();
  let secondNumber = $('.secondInputField').val();
  let operator = '+';
  const numberInputs = {
    firstNumber,
    secondNumber,
    operator,
  };
  postInputs(numberInputs);
  clear();
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
