const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const history = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

//function to calculate two arguments
//function should handle addition, subtraction, multiplication, division

app.get('/inputs', (req, res) => {
  res.send('fuck if I know');
});

app.post('/inputs', (req, res) => {
  const inputs = req.body.numbers;
  console.log('inputValues: ', inputs);
  const history = [];
  history.push(inputs);
  console.log('in history: ', history);
  res.sendStatus(201);
});

app.listen(PORT, function () {
  console.log('listening on port', PORT);
});
