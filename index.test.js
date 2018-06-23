const array = require('./index');

test('pop', () => {
  const a = [1, 2, 3];
  const result = array.pop(a);
  expect(result).toBe(3);
  expect(a).toEqual([1, 2]);
});

test('push', () => {
  const a = [1, 2];
  const length = array.push(a, 4);
  expect(length).toBe(3);
  expect(a).toEqual([1, 2, 4]);
});

test('shift',() =>{
  const a = ['a','b','c','d'];
  const result = array.shift(a);
  expect(result).toBe('a');
  expect(a).toEqual(['b','c','d']);
});


