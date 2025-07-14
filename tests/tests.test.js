import { test, expect } from '@jest/globals';
import { sum, multiply, brokenSum } from '../lib/math'

// Test sum
test('adds 1 + 2 to equal to 3', () => expect(sum(1,2)).toBe(3));
test('adds 10 + 11 to equal to 21', () => expect(sum(10, 11)).toBe(21));

// Test multiply
test('multiplies 20 * 5 to equal to 100', () => expect(multiply(20, 5)).toBe(100));
test('multiplies 20 * 0 to equal to 0', () => expect(multiply(20, 0)).toBe(0));

// Test brokenSum
test('BROKEN: adds 1 + 2 to equal to 3', () => expect(brokenSum(1, 2)).toBe(3));
