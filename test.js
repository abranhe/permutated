import test from 'ava';
import p from '.';

function testLength(t, word, expectedLength) {
	t.is(p.numberOfPermutations(word), expectedLength);
}

function testPermutations(t, word, expectedArray) {
	t.deepEqual(p(word), expectedArray);
}

test('Test length of the array in a single element to permute', testLength, 'x', 1);

test('Test length of the array', testLength, 'abc', 6);

test('Test Length of the integers in array', testLength, '1234567', 5040);

test('Test \'abc\' permutations', testPermutations, 'abc', [
	'abc', 'acb', 'bac', 'bca', 'cab', 'cba'
]);

test('Test a single element permutation', testPermutations, '7', '7');

test('Test integer permutations', testPermutations, '7890', [
	'7890',
	'7809',
	'7980',
	'7908',
	'7089',
	'7098',
	'8790',
	'8709',
	'8970',
	'8907',
	'8079',
	'8097',
	'9780',
	'9708',
	'9870',
	'9807',
	'9078',
	'9087',
	'0789',
	'0798',
	'0879',
	'0897',
	'0978',
	'0987'
]);
