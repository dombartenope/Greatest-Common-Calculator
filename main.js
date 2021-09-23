//Select html elements to display result after function call
const firstInput = document.querySelector('.a-input');
const secondInput = document.querySelector('.b-input');
const button = document.querySelector('button');
const resultText = document.querySelector('.result');

//Finds the greatest(highest) common factor of two given numbers
const findTheHCF = (a, b) => {
    let result;
    //check if params are equal, and if so, set result to a and b
    if (a === b) {
        result = b;
        console.log(result);
    }
    //Check which number is lower, because the hcf 
    //cannot be larger than the lowest number
    if(a > b) {
        for (let i = b; i > 0; i--) {
            if (a % i === 0 && b % i === 0) {
                result = i;
                break;
            }
        }
    } else {
        for (let i = a; i > 0; i--) {
            if (a % i === 0 && b % i === 0) {
                result = i;
                break;
            }
        }
    }
    
    return result;
}

button.addEventListener('click', () => {
    resultText.textContent = findTheHCF(firstInput.value, secondInput.value);
})