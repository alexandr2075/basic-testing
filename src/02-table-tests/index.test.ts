// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 1, b: 2, action: Action.Substract, expected: -1 },
  { a: 1, b: 2, action: Action.Multiply, expected: 2 },
  { a: 1, b: 2, action: Action.Divide, expected: 0.5 },
  { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
  { a: 1, b: 2, action: 4, expected: null },
  { a: 1, b: 'p', action: Action.Add, expected: null },
];

describe.each(testCases)('simpleCalculator', ({ a, b, action, expected }) => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a, action, b })).toBe(expected);
  });

  test('should substract two numbers', () => {
    expect(simpleCalculator({ a, action, b })).toBe(expected);
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a, action, b })).toBe(expected);
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a, action, b })).toBe(expected);
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({ a, action, b })).toBe(expected);
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a, action, b })).toBe(expected);
  });

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({ a, action, b })).toBe(expected);
  });
});
