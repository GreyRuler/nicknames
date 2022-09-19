import { expect, test } from '@jest/globals';
import Validator from '../Validator';

test.each([
  { username: 'd355_-d', expected: true },
  { username: 'd355d++', expected: false },
  { username: 'd3555d', expected: false },
  { username: 'd355', expected: false },
  { username: '355d', expected: false },
  { username: 'd355#d', expected: false },
  { username: 'd355.d', expected: false },
  { username: 'd355/d', expected: false },
  { username: 'd355?d', expected: false },
  { username: 'd355@d', expected: false },
  { username: 'd355$d', expected: false },
  { username: 'd355^d', expected: false },
  { username: 'd355&d', expected: false },
  { username: 'd355{d', expected: false },
  { username: 'd355}d', expected: false },
  { username: 'd355[d', expected: false },
  { username: 'd355]d', expected: false },
  { username: 'd355|d', expected: false },
  { username: 'd355,d', expected: false },
  { username: 'd355<d', expected: false },
  { username: 'd355>d', expected: false },
  { username: 'd355*d', expected: false },
  { username: 'd355(d', expected: false },
  { username: 'd355)d', expected: false },
  { username: 'd355=d', expected: false },
  { username: 'd355\\d', expected: false },
  { username: 'd355!d', expected: false },
  { username: 'd355`d', expected: false },
  { username: 'd355~d', expected: false },
])('should check the $username for validity', ({ username, expected }) => {
  const result = Validator.validateUsername(username);
  expect(result).toBe(expected);
});
