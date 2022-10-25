// If we add an "!" in the end we let TS know that we will get an element for sure and not "null"
// We had to add "as HTMLInputElement" to let TS knows that we will get an HTMLElement with a value property
const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add(1, 6));

buttonElement.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  // If we didnt add the "+" sign here TS would complain that HTMLInputElement returns a string
  const result = add(+num1, +num2);
  console.log(result);
});
