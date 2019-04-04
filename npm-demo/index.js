// Learing how to install and use 3rd party modules using the node package manager

var _ = require('underscore');

// It first searches undersocre in the Core Modules
// Then it searches in for underscore.js file,  and then for undercode/index.js
// finally it looks for underscore.js in node_modules

var result = _.contains([1, 2, 3], 2);
console.log(result);