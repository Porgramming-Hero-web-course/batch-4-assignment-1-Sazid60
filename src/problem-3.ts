// Problem 3:
// Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

// // Sample Input:
// countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");

// // Sample Output:
// 2;

const countWordOccurrences =(sentence :string , word:string):number =>{
    let count :number = 0
    const sentenceArray:string[] = sentence.toLocaleLowerCase().replace(/[^\w\s]|_/g, "").split(" ")
    const matcherWord:string = word.toLocaleLowerCase()
    
    for(const sentenceWord of sentenceArray){
        if(sentenceWord === matcherWord){
            count++
        }
    }
    return count
}

countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")
// const result = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
// console.log(result)

