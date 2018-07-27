const permutated = require('./index.js');

(async () => {
	console.log(await permutated('abc'));
	//=> [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

	console.log(await permutated.getLength('1234567'));
	//=> 5040
})();
