const express = require('express');
const app = express();

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

app.get('/api/courses/:id', (req, res) => {
    // Checking if the course is present in our array
    const course = courses.find(c => c.id === parseInt(req.params.id));
    
    // If the course is not found
    if (!course) res.status(404).send('The course with the given ID was not found.');

    // If course is found then send the entire course object back to browser
    res.send(course);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));