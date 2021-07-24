// Array Iteration Methods //

// forEach
[1,2,3].forEach(function(item, index)
{
  console.log(`item: ${item}, index: ${index}`);
});


// map
const three = [1, 2, 3];
const doubled = three.map(function(item)
{
  return item * 2;
});
console.log(doubled);


// filter
const ints = [1, 2, 3, 4, 5];
const evens = ints.filter(function(item)
{
  return item % 2 === 0;
});
console.log(evens);


// reduce
const sum = [1, 2, 3].reduce(function(result, item)
{
  return result + item;
}, 0);
console.log(sum);


// some
const hasNegativeNumber = [1, 2, 3, -1, 4].some(function(item)
{
  return item < 0;
});
console.log(hasNegativeNumber);


// every
const hasPositiveNumber = [1, 2, -3].every(function(item)
{
  return item > 0;
});
console.log(hasPositiveNumber);


// find
const objects = [{ id: 'a'}, {id: 'b'}, {id: 'c'}];
const found = objects.find(function(item)
{
  return item.id === 'b';
});
console.log(found);


// findIndex
const objects2 = [{ id: 'a'}, {id: 'b'}, {id: 'c'}];
const foundIndex = objects2.findIndex(function(item)
{
  // if it does not find the element then it will return -1
  return item.id === 'b';
});
console.log(foundIndex);