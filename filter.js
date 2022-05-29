//======================================================================================================
//          Implement filter with for
//
// Use forEach to write a function that behaves like filter.
//======================================================================================================

function filter(arr, callback) {
    let newArr=[];
    arr.forEach((elem)=> {
        if(callback(elem)){
        newArr.push(elem);
        }});
    return newArr;
}

//======================================================================================================
//          Even numbers
//
// Write a function that returns only the even numbers from an array.
//======================================================================================================

function evens(arr) {
    return arr.filter(elem => elem%2 === 0);
}

//======================================================================================================
//          Implement Compact
//
// write a function compact that removes all nulls from an array. It should return an array of all 
// non-null values from the original array.
//======================================================================================================

function compact(arr) {
    return arr.filter((elem) => elem !== null);
}