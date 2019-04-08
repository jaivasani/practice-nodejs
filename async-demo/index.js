console.log('Before');

getUser(1)
    .then(user => getRepositories(user.githubUsername))
    .then(repos => console.log('Repos:', repos))
    .catch(err => console.log('Error:', err.message));

console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({id: id, githubUsername: 'jaivasani'});
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Using github api to read the repositories of the user', username);
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000); 
    });
}