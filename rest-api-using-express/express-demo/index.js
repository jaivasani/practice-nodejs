const Joi = require('joi');
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
    res.send(courses);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}

// POST Request
app.post('/api/courses', (req, res) => {
    // Validating and also using object destructuring property of javascript
    const { error } = validateCourse(req.body);
    // If invalid, return 400 - Bad Request
    if (error) {
        res.status(400).send(error.details[0].message);
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

// PUT Request
app.put('/api/courses/:id', (req, res) => {
    // Checking if the course is present in our array based on id
    const course = courses.find(c => c.id === parseInt(req.params.id));
        
    // If the course is not found, return 404 - Not Found
    if (!course) res.status(404).send('The course with the given ID was not found.');

    // Validating and also using object destructuring property of javascript
    const { error } = validateCourse(req.body);
    // If invalid, return 400 - Bad Request
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    // Update course
    course.name = req.body.name;

    // Return updated course
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

// DELETE request
app.delete('/api/courses/:id', (req, res) => {
    // Checking if course present in array
    const course = courses.find(c => c.id === parseInt(req.params.id));

    // If course not found, return 404 - Not Found
    if (!course) res.status(404).send('The course with the given ID was not found.');

    // If course found then delete course
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));