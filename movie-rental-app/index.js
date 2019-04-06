const express = require('express');
const app = express();

const genre = [
    {id: 1, name: 'Action'},
    {id: 2, name: 'Drama'},
    {id: 3, name: 'Comedy'}
];

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/api/genre', (req, res) => {
    res.send(genre);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
