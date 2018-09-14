
<p align="center">
	<a href="https://www.npmjs.com/package/permutated"><img src="https://cdn.abraham.gq/projects/permutated/logo.svg" width="30%"></a>
	<br>
	<br>
	<br>
	<a href="https://www.npmjs.com/package/permutated">𝓟ℯ𝓇𝑚𝓊𝓉𝒶𝓉ℯ𝒹</a>: get all available combinations
</p>

<p align="center">
	<a href="https://travis-ci.org/abranhe/permutated"><img src="https://img.shields.io/travis/abranhe/permutated.svg?logo=travis" /></a>
	<a href="https://github.com/xojs/xo"><img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg" /></a>
	<a href="https://github.com/abranhe"><img src="https://abranhe.com/badge.svg"></a>
	<a href="https://cash.me/$abranhe"><img src="https://cdn.abraham.gq/badges/cash-me.svg"></a>
	<a href="https://paypal.me/abranhe/10"><img src="https://cdn.abraham.gq/badges/paypal.svg"></a>
	<a href="https://www.patreon.com/abranhe"><img src="https://cdn.abraham.gq/badges/patreon.svg" /></a>
	<a href="https://github.com/abranhe/permutated/blob/master/LICENSE"><img src="https://img.shields.io/github/license/abranhe/permutated.svg" /></a>
</p>

# Install

```
$ npm install permutated
```

# Why Permutated?

- Generate all available [permutations](https://en.wikipedia.org/wiki/Permutation)
- Clean and focused
- Actively maintained

> Notice ![notice](https://png.icons8.com/color/30/000000/error.png)
>
> Since the complexity of the permutations algorithm, Permutated could take a some time
>
> Example:
>
>   7 letters word ~> complexity [7!](https://www.google.com/search?q=7!): 5040 available combinations to generate

# Usage

```js
const permutated = require('permutated');

(async () => {
	console.log(await permutated('abc'));
	//=> [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

	console.log(await permutated.getLength('1234567'));
	//=> 5040
})();
```

# API

**permutated(word)**

> Return array with permutations

- **name** - Type `String`
- Return: Type `Array`

**permutated.getLength(word)**

> Return array length

- **name** - Type `String` or `int`
- Return: Type `int`

# Team

|[![Carlos Abraham Logo](https://avatars3.githubusercontent.com/u/21347264?s=50&v=4)](https://19cah.com)|
| :-: |
| [Carlos Abraham](https://github.com/abranhe) |


# License

[MIT](https://github.com/abranhe/permutated/blob/master/LICENSE) License © [Carlos Abraham](https://github.com/abranhe/permutated)
