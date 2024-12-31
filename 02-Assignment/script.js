function reverseString() {
    const inputField = document.getElementById("userInput");
    const outputDiv = document.getElementById("output");
    const inputDiv = document.getElementById("input");
    const inputValue = inputField.value;
    inputDiv.textContent = `Original string : ${inputValue}`;
    const reverseValue = inputValue.split('').reverse().join('');
    outputDiv.textContent = `Reversed string : ${reverseValue}`;
}