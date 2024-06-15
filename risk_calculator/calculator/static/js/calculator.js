// calculator.js

// Get all the dropdown menus and the result element
const dropdownMenus = document.querySelectorAll('select');
const resultElement = document.getElementById('result-value');

// Function to calculate the risk assessment result
function calculateResult() {
    let result = 0;
    dropdownMenus.forEach(menu => {
        const selectedOption = menu.options[menu.selectedIndex];
        const optionValue = parseInt(selectedOption.value);
        result += optionValue;
    });
    resultElement.textContent = result;
}

// Add event listeners to the dropdown menus
dropdownMenus.forEach(menu => {
    menu.addEventListener('change', calculateResult);
});

// Initialize the result value
calculateResult();