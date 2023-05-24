const words = require('./words.json');

// 1. Start simple -

/**
 * Logs all the words.
 * @param {string[]} words - an array of strings.
 */

function allWords(words) {
	words.forEach((word) => console.log(word));
}

/**
 * Logs the first ten words.
 * @param {string[]} words - an array of strings.
 */

function firstTenWords(words) {
	for (let i = 0; i < 10; i++) {
		console.log(words[i]);
	}
}

/**
 * Logs the next ten words.
 * @param {string[]} words - an array of strings.
 */

function nextTenWords(words) {
	for (let i = 10; i < 20; i++) {
		console.log(words[i]);
	}
}

/**
 * Logs from 0 to x words.
 * @param {string[]} words - an array of strings.
 * @param {number} num - number that represents how many words to log from the 0th index.
 */

function firstXWords(words, num) {
	for (let i = 0; i < num; i++) {
		console.log(words[i]);
	}
}

/**
 * Logs from x to y words.
 * @param {string[]} words - an array of strings.
 * @param {number} firstPos - number that represents the starting index in the array.
 * @param {number} secondPos - number that represents the ending index in the array.
 */

function subsetOfWords(words, firstPos, secondPos) {
	for (firstPos; firstPos < secondPos; firstPos++) {
		console.log(words[firstPos]);
	}
}

/**
 * Logs all the words, sorted alphabetically.
 * @param {string[]} words - an array of strings.
 */

function sortWords(words) {
	const sortedWords = words.sort((a, b) => {
		if (a.toLowerCase() < b.toLowerCase()) {
			return -1;
		}
		if (a.toLowerCase() > b.toLowerCase()) {
			return 1;
		}
		return 0;
	});
	console.log(sortedWords);
}
