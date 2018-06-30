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
  const a = [1,2,3];
  const result = array.shift(a);
  expect(result).toBe(1);
  expect(a).toEqual([2,3]);
});
test('concat',()=>{
   const array1 = ['a','b','c'];
   const array2 = ['d','e','f'];
   const result = array.concat(array1,array2);
   expect(result).toEqual(['a','b','c','d','e','f']);
   expect(array1).toEqual(['a','b','c'])
})

// test('slice',() => {
//  const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
//  const result = array.slice(animals,2);
//  expect(result).toBe(['camel', 'duck', 'elephant']);
//  expect(array.slice(animals,2,4)).toBe(['camel', 'duck']);
//  expect(array.slice(animals,1,5)).toBe(['bison', 'camel', 'duck', 'elephant']);
//  expect(a).toEqual(['ant', 'bison', 'camel', 'duck', 'elephant']);
// });


