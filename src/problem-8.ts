
// Problem 8:
// Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

// // Sample Input:
// const person = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(validateKeys(person, ["name", "age"]));

// // Sample Output:
// true;

// Solution-8 :

const validateKeys = <T extends Record<string, unknown>>(obj: T, keys: (keyof T)[]): boolean => {

    if (keys.length === 0) return false;

    const objKeys: string[] = Object.keys(obj);

    for (const key of keys) {
        if (!objKeys.includes(key as string)) {
            return false;
        }
    }

    return true;
};

// const person = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(validateKeys(person, ["name", "age", "email"]));
