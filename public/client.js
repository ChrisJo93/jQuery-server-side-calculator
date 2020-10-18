$(document).ready(onReady);

function onReady() {
  $('.buttonAdd').on('click', test);
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

function addition() {
  $;
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
