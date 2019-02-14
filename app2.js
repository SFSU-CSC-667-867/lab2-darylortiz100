const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/world', (red, res) => res.send('Hello Network!'));

app.listen(port, () => console.log('Example app listening on port $(port)!'));