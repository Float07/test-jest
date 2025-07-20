const { test, expect } = require('@jest/globals');
const { asyncSum, asyncMultiply, asyncBrokenSum } = require('../lib/math-async');


// Test sum
test('async: adds 1 + 2 to equal to 3', async () => expect(await asyncSum(1,2)).toBe(3));
test('async: adds 10 + 11 to equal to 21', async () => expect(await asyncSum(10, 11)).toBe(21));

// Test multiply
test('async: multiplies 20 * 5 to equal to 100', async () => expect(await asyncMultiply(20, 5)).toBe(100));
test('async: multiplies 20 * 0 to equal to 0', async () => expect(await asyncMultiply(20, 0)).toBe(0));

// Test brokenSum
test('async: BROKEN: adds 1 + 2 to equal to 3', async () => expect(await asyncBrokenSum(1, 2)).toBe(3));
