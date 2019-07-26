declare namespace permuatated {
	/**
   *  Get the number of permuations avilable in a string.
   * 
   * @param {string} word the string to permutate.
   * @returns the number of permuations avilable in a string.
   * 
   * @example
   * ```
   * import { numberOfPermutations } from 'permutated';
   * 
   * numberOfPermutations('abc')
   * // => 6
   * ```
  */
	export function numberOfPermutations(word: string): number;
}

/**
 * Return all the permuations available from a string.
 *
 * @param {string} word the string to permutate.
 * @returns all the permuations available from a string.
 *
 * @example
 * ```
 * import permuatated from 'permutated';
 *
 * permuatated('abc')
 * //=> [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 * ```
 */
declare function permuatated(word: string): string | string[]

export = permuatated;
