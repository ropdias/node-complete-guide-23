// If we add an "!" in the end we let TS know that we will get an element for sure and not "null"
// We had to add "as HTMLInputElement" to let TS knows that we will get an HTMLElement with a value property
const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

const numResults: number[] = []; // Declaring a array of numbers
const textResults: string[] = []; // Declaring a array of strings

// Type Aliases:
type NumOrString = number | string;
type Result = { val: number; timestamp: Date };
// Interfaces:
interface ResultObj {
  val: number;
  timestamp: Date;
}
// When to use Type Alias and when to use Interface:
// 1) If you are just defining the structure of an object you can use either of the two. Using interfaces is a bit more common.
// 2) Interfaces can however also be used to force classes to implement certain methods or functionalities.
// But for basic type aliasing, it doesn't matter if you use type or interface
// Important note: if you add your own class or contructor function you could use the class name as a type as well just 
// like when you define a type or interface. And that's is true for any constructor and class.
// Like when using the class Date as a type:

function add(num1: NumOrString, num2: NumOrString) {
  // If we add the if check with typeof, then TS let us sum the numbers if the types are equal.
  // This is called Type Guard: because we run different code based on different types we're
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + "" + num2; // We didn't need the "" but just to make it clear
  }
  return +num1 + +num2; // Forcing a conversion to a number if one is string and the other is a number
}

function printResult(resultObj: Result) {
  console.log(resultObj.val);
}

console.log(add(1, 6));

buttonElement.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  // If we didnt add the "+" sign here TS would complain that HTMLInputElement returns a string
  const result = add(+num1, +num2);
  numResults.push(result as number); // Since result can be string | number we need to tell TS this is a number
  const stringResult = add(num1, num2);
  textResults.push(stringResult as string); // Since result can be string | number we need to tell TS this is a string
  console.log(result);
  console.log(stringResult);
  // Since TS cant understand that result is always a number we should cast with "as number"
  // because we know that this here is always a number
  printResult({ val: result as number, timestamp: new Date() });
  console.log(numResults, textResults);
});
