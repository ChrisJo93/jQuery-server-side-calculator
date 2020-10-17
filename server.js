const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/test', (req, res) => {
  res.send("fuckin' about");
});

app.post('/test', (req, res) => {
  console.log("still fuckin' about");
  res.sendStatus(200);
});

app.listen(PORT, function () {
  console.log('listening on port', PORT);
});
