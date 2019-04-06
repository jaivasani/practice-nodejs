const Joi = require('joi');
const express = require('express');
const app = express();

// To parse JSON object during the POST request
app.use(express.json());

const genres = [
    {id: 1, name: 'Action'},
    {id: 2, name: 'Drama'},
    {id: 3, name: 'Comedy'}
];

function genreValidation(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(genre, schema);
}

// GET Request
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

// POST Request
app.post('/api/genres', (req, res) => {
    // Validating genre
    const { error } = genreValidation(req.body);

    // If error then 400 - Bad Request
    if (error) return res.status(400).send(error.details[0].message);

    // Create new genre object
    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };

    // Added genre to the genres array
    genres.push(genre);

    // Return the newly added genre
    res.send(genre);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
