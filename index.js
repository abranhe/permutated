'use strict';

function permute(word) {
	if (word.length < 2) {
		return word;
	}
	const permutations = [];
	let before;
	let focus;
	let after;
	let shortWord;
	let subAnagrams;
	let newEntry;

	for (let i = 0; i < word.length; i++) {
		before = word.slice(0, i);
		focus = word[i];
		after = word.slice(i + 1, word.length + 1);
		shortWord = before + after;
		subAnagrams = permute(shortWord);

		for (let j = 0; j < subAnagrams.length; j++) {
			newEntry = focus + subAnagrams[j];
			permutations.push(newEntry);
		}
	}
	return permutations;
}

module.exports = word => {
	return permute(word);
};

module.exports.getLength = word => {
	return permute(word).length;
};
