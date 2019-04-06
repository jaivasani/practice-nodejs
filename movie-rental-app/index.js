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

app.get('/api/genres/:id', (req, res) => {
    // Check if genre id is in array
    const genre = genres.find(g => (g.id === parseInt(req.params.id)));

    // Genre not found, error 404
    if (!genre) return res.status(404).send('The genre with the given ID is not found');
    
    // Genre is found
    res.send(genre);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
