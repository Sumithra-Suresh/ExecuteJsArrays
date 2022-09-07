
// Sum the squares of the odd numbers in an array using map, filter and reduce

function f(arr) {
  return arr.filter(num => num%2 === 1)
    .map(num => num * num)
    .reduce(((sum, current) => sum+current),0);
  
}
