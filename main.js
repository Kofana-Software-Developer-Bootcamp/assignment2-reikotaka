let intA = document.querySelector("#intA");
let intB = document.querySelector("#intB");
let result = document.querySelector("#result");
let buttons = document.querySelector(".operators")


for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    element.addEventListener("click", () => {
        checkOperations(element.textContent, intA.value, intB.value);
    });
}

const checkOperations = (op, intA, intB) => {
    switch (op) {
        case "+":
            requestMethod("add", intA, intB);
            break;
        case "-":
            requestMethod("subtract", intA, intB);
            break;
        case "/":
            requestMethod("divide", intA, intB);
            break;
        case "*":
            requestMethod("multiply", intA, intB);
            break;
        default:
            break;
    }
};

const base_url = "http://localhost:3001/";
const requestMethod = (op, intA, intB) => {
    fetch(`${base_url + op}?intA=${intA}&intB=${intB}`)
        .then((response) => response.json())
        .then((data) => (result.textContent = data));
};