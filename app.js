const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/hello'), (req, res) => {
	console.log(req.query);
	res.send('Hello ' + req.query.name);
};

app.get('/network', (req, res) => {
    axios.get('http://location:3001/world')
    .then((networkResponse) => {
    })
    .catch(() => {
        res.send(':( did not work.');

    });
});

app.get('/', (red, res) => res.send('Hello World!'));

app.listen(port, () => console.log('Example app listening on port $(port)!'));