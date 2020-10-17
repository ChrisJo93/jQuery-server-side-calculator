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

app.get('/test', (req, res) => {
  res.send(history);
});

app.post('/test', (req, res) => {
  console.log("still fuckin' about");
  res.sendStatus(200);
});

app.listen(PORT, function () {
  console.log('listening on port', PORT);
});
