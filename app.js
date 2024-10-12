"strict mode";

const addBtn = document.getElementById("Add");
const minusBtn = document.getElementById("Minus");
const resetBtn = document.getElementById("reset");
const displayEl = document.querySelector(".display-num");

// initializing conter
let counter = 0;
display.value = counter;

addBtn.addEventListener("click", () => {
  console.log("add");
  counter++;
  display.value = counter;
});

minusBtn.addEventListener("click", () => {
  console.log("Minus");
  if (counter > 0) {
    counter--;
    display.value = counter;
  }
});

resetBtn.addEventListener("click", () => {
  console.log("reset");
  counter = 0;
  display.value = counter;
});
