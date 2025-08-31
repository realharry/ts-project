// src/sum.test.ts
import { sum } from './hello';
import { describe, test, expect } from '@jest/globals';

describe('sum function', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('adds negative numbers correctly', () => {
        expect(sum(-1, -2)).toBe(-3);
    });
});
