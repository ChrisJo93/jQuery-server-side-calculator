$(document).ready(onReady);

function onReady() {
  $('.buttonAdd').on('click', addition);
  $('.buttonSubtract').on('click', subtraction);
  $('.buttonMultiply').on('click', multiplication);
  $('.buttonDivide').on('click', division);
  $('.buttonEquals').on('click', equals);
  $('buttonClear').on('click', clear);
}
