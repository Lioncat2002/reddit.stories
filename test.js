const { reddit } = require('./src/reddit');
reddit.FetchPostbyID('nwccti').then((data) => {
	console.log('FetchPostbyID Example:');
	console.log(data);
});