// Problem 2:
// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

// // Sample Input:
// removeDuplicates([1, 2, 2, 3, 4, 4, 5])[
//   // Sample Output:
//   (1, 2, 3, 4, 5)
// ];

// Solution-2

const removeDuplicates = (arr:number[]):number[] =>{
const noDuplicates:number[] = []

for (const element of arr) {
    if(!noDuplicates.includes(element)){
        noDuplicates.push(element)
    }
}

return noDuplicates
}


removeDuplicates([1, 2, 2, 3, 4, 4, 5])

// const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
// console.log(result);
