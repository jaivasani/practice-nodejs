console.log('Before');

// User value is undefined because the value is not available yet
const user = getUser(1); 

console.log(user); // User value undefined
console.log('After');

function getUser(id) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        return {id: id, name: 'githubUser'};
    }, 2000);
}