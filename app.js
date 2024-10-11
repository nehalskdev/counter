"strict mode"

const add = document.getElementById("Add");
const minus = document.getElementById("Minus");
const reset = document.getElementById("reset");
const display = document.querySelector(".display-num");

// initializing conter 
let counter = 0;
display.value = counter;

add.addEventListener('click', () => {
    console.log("add");
    counter++;
    display.value = counter;

});

minus.addEventListener('click', () => {
    console.log('Minus');
    counter--;
    display.value = counter;
});

reset.addEventListener("click", () => {
    console.log('reset')
    counter = 0;
    display.value = counter;
});


