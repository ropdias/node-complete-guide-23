// If we add an "!" in the end we let TS know that we will get an element for sure and not "null"
// We had to add "as HTMLInputElement" to let TS knows that we will get an HTMLElement with a value property
const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

function add(num1: number | string, num2: number | string) {
  // If we add the if check with typeof, then TS let us sum the numbers if the types are equal.
  // This is called Type Guard: because we run different code based on different types we're
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + "" + num2; // We didn't need the "" but just to make it clear
  }
  return +num1 + +num2; // Forcing a conversion to a number if one is string and the other is a number
}

console.log(add(1, 6));

buttonElement.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  // If we didnt add the "+" sign here TS would complain that HTMLInputElement returns a string
  const result = add(+num1, +num2);
  const stringResult = add(num1, num2);
  console.log(result);
  console.log(stringResult);
});
