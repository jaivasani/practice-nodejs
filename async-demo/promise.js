const p = new Promise((resolve, reject) => {
    // some async work
    setTimeout(() => {
        //resolve(1);
        reject(new Error('MyErrorMessage'));
    }, 2000);
});

// then function is run when promise is resolved
// catch function is run when promise is rejected
p
    .then(result => console.log('Result:', result))
    .catch(err => console.log('Error:', err.message));