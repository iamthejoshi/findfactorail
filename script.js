// Recursive function to calculate factorial
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Function to handle the factorial calculation and update the result
function calculateFactorial() {
    const numberInput = document.getElementById('numberInput').value;
    const resultOutput = document.getElementById('resultOutput');
    const number = parseInt(numberInput, 10);

    if (isNaN(number) || number < 0) {
        resultOutput.textContent = 'Factorial is not defined for negative numbers.';
    } else {
        const result = factorial(number);
        resultOutput.textContent = `The factorial of ${number} is ${result}.`;
    }
}
