////unit tests 

const sum = require('./utils');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toEqual(3);
});