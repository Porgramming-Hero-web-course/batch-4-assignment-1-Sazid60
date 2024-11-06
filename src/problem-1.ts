// Problem 1:
// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

// Sample Input:
// sumArray([1, 2, 3, 4, 5]);

// Sample Output:
// 15;


// Solution-1

const sumArray = (arr :number[]) :number =>{
    return arr.reduce((accumulator, currentValue) =>{
        return accumulator + currentValue
    },0)
}

sumArray([1, 2, 3, 4, 5]);

// const sum = sumArray([1, 2, 3, 4, 5]);
// console.log(sum);