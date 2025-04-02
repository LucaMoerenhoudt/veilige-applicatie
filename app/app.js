require('dotenv').config();
const secretKey = process.env.APP_SECRET_KEY;
console.log(secretKey);
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welkom bij de veilige applicatie!');
});

app.listen(3000, () => {
  console.log('Server draait op http://localhost:3000');
});
