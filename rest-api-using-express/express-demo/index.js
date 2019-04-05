const express = require('express');
const app = express();

app.use(express.json());

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

// POST Request
app.post('/api/courses', (req, res) => {
    // Input validation
    if (!req.body.name || req.body.name.length < 3) {
        // 400 Bad Request
        res.status(400).send('Name is required and should be atlest 3 characters.');
        return;
    }

    // Creating the new object for the courses array
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    // Adding course object to courses array
    courses.push(course);

    // Sending the newly created course object to browser so user can see the new course ID
    res.send(course);
});


// GET Request
// Route with parameter
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