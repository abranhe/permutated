<p>
	<a href="https://www.npmjs.com/package/permutated">
		<img src="https://cdn.abranhe.com/projects/permutated/logo.svg" width="30%">
	</a>
	<br>
</p>

# 𝓟ℯ𝓇𝑚𝓊𝓉𝒶𝓉ℯ𝒹

> Get all available combinations

[![](https://img.shields.io/travis/abranhe/permutated.svg?logo=travis)](https://travis-ci.org/abranhe/permutated)
[![](https://abranhe.com/badge.svg)](https://github.com/abranhe)
[![](https://cdn.abranhe.com/badges/cash-me.svg)](https://cash.me/$abranhe)
[![](https://cdn.abranhe.com/badges/patreon.svg)](https://patreon.com/abranhe)
[![](https://img.shields.io/github/license/abranhe/permutated.svg)](https://github.com/abranhe/permutated/blob/master/license)
[![](https://img.shields.io/npm/v/permutated.svg)](https://npmjs.com/package/permutated)

<br>

In mathematics, permutation is the act of arranging the members of a set into a sequence or order, or, if the set is already ordered, rearranging (reordering) its elements a process called permuting. Permutations differ from combinations, which are selections of some members of a set regardless of order.

[Read More...](https://en.wikipedia.org/wiki/Permutation)

### Complexity?

7 letters word ~> [7!](https://www.google.com/search?q=7!)  ~> 5040 available combinations to generate.

## Important 

This module uses [Array.prototype.flat()](https://node.green/#ES2019-features-Array-prototype--flat--flatMap--Array-prototype-flat) that was introduced on Node.js 11+. You can still use the previus version [(1.0.1)](https://www.npmjs.com/package/permutated/v/1.0.1) of permutated.

## Install

```
$ npm install permutated
```

## Usage

```js
const permutated = require('permutated');

permutated('abc'));
//=> [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

permutated.numberOfPermutations('1234567'));
//=> 5040
```

## API

### permutated(word)

Return type: `string[] | string`

Return all the permuations available from a string.

#### word

Type: `string`

The string to permutate.

### numberOfPermutations(word)

Return Type: `number`

Get the number of permuations avilable in a string.

#### word

Type: `string`

The string to permutate.

## Related

- [all-words](https://github.com/abranhe/all-words): Generate all available words super fast

## License

MIT © [Carlos Abraham](https://abranhe.com)
