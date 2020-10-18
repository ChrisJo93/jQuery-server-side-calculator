$(document).ready(onReady);

function onReady() {
  $('.buttonAdd').on('click', operation);
  $('.buttonSubtract').on('click', operation);
  $('.buttonDivide').on('click', operation);
  $('.buttonMultiply').on('click', operation);
  $('.buttonEquals').on('click', submitEquals);
  $('.buttonClear').on('click', clear);
}
//creates a manipulatable(word?) property to add to inputs
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
  console.log('testing render in submit');
  renderAnswer();
}

function operation() {
  //This part messed with my head. Gives value to the operator buttons
  operator = $(this).prop('value');
}

function clear() {
  $('.firstInputField').val('');
  $('.secondInputField').val('');
}

function renderHistory(history) {
  let counter = 1;
  $('.displayArea').empty();
  for (let i = 0; i < history.length; i++) {
    $('.displayArea').append(
      `<p>${counter++}: Previous Calculation: ${history[i]}<p>`
    );
  }
}

function renderAnswer(thing) {
  $('.answerBox').text(thing);
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
      getHistory();
      getAnswer();
    })
    .catch(function (err) {
      console.log(err);
      alert('fuck this is tough');
    });
}

function getHistory() {
  $.ajax({
    type: 'GET',
    url: '/inputs',
  })
    .then(function (response) {
      renderHistory(response);
    })
    .catch(function (err) {
      console.log(err);
      alert('yo render broke af');
    });
}

function getAnswer() {
  $.ajax({
    type: 'GET',
    url: '/inputsAnswer',
  })
    .then(function (response) {
      console.log('in response get: ', response);
      renderAnswer(response);
    })
    .catch(function (err) {
      console.log(err);
      alert('yo shit broke here dog');
    });
}
