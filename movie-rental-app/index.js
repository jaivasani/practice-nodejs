const express = require('express');
const app = express();

const genres = [
    {id: 1, name: 'Action'},
    {id: 2, name: 'Drama'},
    {id: 3, name: 'Comedy'}
];

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/api/genres', (req, res) => {
    res.send(genres);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
