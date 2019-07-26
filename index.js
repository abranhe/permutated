'use strict';

function permute(arr) {
	if (arr.length === 1) {
		return arr;
	}

	return arr.map((d, i) => permute([...arr.slice(0, i), ...arr.slice(i + 1)]).map(v => [d, v].join(''))).flat();
}

module.exports = word => word.length === 1 ? word : permute(word.split(''));
module.exports.numberOfPermutations = word => permute(word.split('')).length;
