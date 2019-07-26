import { expectType } from 'tsd';
import permutated = require('.');
import { numberOfPermutations } from '.';

expectType<string[] | string>(permutated('abc'));
expectType<number>(numberOfPermutations('abc'));
