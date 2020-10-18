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
  //sets a counter for each history input
  let counter = 1;
  $('.displayArea').empty();
  for (let i = 0; i < history.length; i++) {
    $('.displayArea').append(`<p>${counter++}..... ${history[i]}<p>`);
  }
}

function renderAnswer(thing) {
  $('.answerBox').text(thing);
}

//API Server calls

//ajax request that sends inputs from submit function
function postInputs(numbersToCalc) {
  $.ajax({
    type: 'POST',
    url: '/inputs',
    data: { numbers: numbersToCalc },
  })
    .then(function (response) {
      //I don't know why these function calls are needed inside this post
      //It would make sense for them to be functioning in just the get?
      //maybe because this is sending it to the server and because of that delay
      //they come back in a reasonable time? I don't know. help.
      getHistory();
      getAnswer();
    })
    .catch(function (err) {
      console.log(err);
      alert('deng this is tough');
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
      alert('broke');
    });
}

function getAnswer() {
  $.ajax({
    type: 'GET',
    url: '/inputsAnswer',
  })
    .then(function (response) {
      renderAnswer(response);
    })
    .catch(function (err) {
      console.log(err);
      alert('big broke');
    });
}
