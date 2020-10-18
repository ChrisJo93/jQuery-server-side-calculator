const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const history = [];
let answer = [0];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

//function to calculate two arguments
//function should handle addition, subtraction, multiplication, division

app.post('/inputs', (req, res) => {
  const inputs = req.body.numbers;
  if (inputs.operator === '-') {
    answer = parseInt(inputs.firstNumber) - parseInt(inputs.secondNumber);
    display =
      inputs.firstNumber +
      ' ' +
      inputs.operator +
      ' ' +
      inputs.secondNumber +
      ' ' +
      '=' +
      ' ' +
      answer;
    history.push(display);
  } else if (inputs.operator === '+') {
    answer = parseInt(inputs.firstNumber) + parseInt(inputs.secondNumber);
    display =
      inputs.firstNumber +
      ' ' +
      inputs.operator +
      ' ' +
      inputs.secondNumber +
      ' ' +
      '=' +
      ' ' +
      answer;
    history.push(display);
  } else if (inputs.operator === '/') {
    answer = parseInt(inputs.firstNumber) / parseInt(inputs.secondNumber);
    display =
      inputs.firstNumber +
      ' ' +
      inputs.operator +
      ' ' +
      inputs.secondNumber +
      ' ' +
      '=' +
      ' ' +
      answer;
    history.push(display);
  } else if (inputs.operator === '*') {
    answer = parseInt(inputs.firstNumber) * parseInt(inputs.secondNumber);
    display =
      inputs.firstNumber +
      ' ' +
      inputs.operator +
      ' ' +
      inputs.secondNumber +
      ' ' +
      '=' +
      ' ' +
      answer;
    history.push(display);
  }
  console.log(answer);
  res.sendStatus(201);
});

app.get('/inputs', (req, res) => {
  res.send(history);
});
app.get('/inputsAnswer', (req, res) => {
  res.send([answer]);
});

app.listen(PORT, function () {
  console.log('listening on port', PORT);
});
