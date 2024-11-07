// Problem 4:

// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

// // Sample Input 1:
// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// // Sample Output 1:
// 78.54;

// // Sample Input 2:
// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });

// // Sample Output 2:
// 24;

// Solution-4 :


type Circle = {
    shape: "circle";
    radius: number;
}

type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
}

type Shape = Circle | Rectangle;


const calculateShapeArea = (param: Shape):number | string => {
    if (param.shape === "circle") {
        const circleArea: number = parseFloat((Math.PI * (param.radius * param.radius)).toFixed(2))
        return circleArea
    } else if (param.shape === "rectangle") {
        const rectangleArea: number = param.height * param.width
        return rectangleArea
    }
    return "The shape is unknown"
}



// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });


//  console.log(circleArea);
//  console.log(rectangleArea);