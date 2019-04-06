console.log('Before');
getUser(1, (user) => {
    // Get repositories
    getRepositories('jaivasani', (repositories) => {
    console.log('Repos:', repositories);
    });
});



console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({id: id, githubUsername: 'jaivasani'});
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Using github api to read the repositories of the user', username);
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}