# The significance of union and intersection types in Typescript. 

1. What is Union Type?

 - Union types are the kind of types that can hold multiple types. Its like if any of the types matches it is good to go, we can compare to the or functionality of of javascript. Union types are defined using "|". 

```typescript
type State1 = {
    status = "Done";
}
type State2 = {
    status = "OnGoing";
}
type State3 = {
    status = "AlmostDone";
}

type State = State1 | State2 | State3

let process: State;

process = { status: "Done" };  
process = { status: "OnGoing" }; 

```
2. What is Intersection Type?

- bIntersection types are the types that takes multiple types and make them follow strictly. This means the assigned variable must have all the properties of the types that are intersected.

```typescript
type User = {name:string, age:number}
type Manager = {role:"manger"}

type ManagerUser = Use & Manager

let managerUser: ManagerUser = {
  name: "sazid",
  age: 30,
  role: "manager",
};
```

4. What is the importance of union and intersection types?
- Union types and intersection types has a significant importance in the perspective of type safety, flexibility of data modeling and expressiveness. 

### Importance of Union Types
- Union types provides flexible data modeling. This means it allows to assign multiple variable and and work with that.

```typescript
type Res = number | string;
let output :Res;

output = 12;
output = "Sazid";
```
- It helps to handle different states.
```typescript
type Result = {sate1:string; state2:number} | {sate3:boolean; state4:"Sazid"}

```

- Union types makes writing function more comfortable allowing it to easily take and return desired type

```typescript
const getParam () : number | string {

}

```
- This provides type safety

### Importance of Intersection Types
- Intersection types offers us to combine multiple types into one types and make any variable to follow strictly.

```typescript
type Car = {
 name:string;
 age:number;   
}
type CarOrigin = {
    madeIn : string;
}

type CarInfo = Car & CarOrigin;

```

- This is also helpful to extending a type

```typescript
type Car = {
 name:string;
 age:number;   
}

type CarInfo = Car & {madeIn : string;};

```
