const inputNum = document.getElementById('number');

const convertButton = document.getElementById('convert-btn');

const resultDiv = document.getElementById('output');

// Parsed decimal value
const numHandler = () => {
    return parseInt(inputNum.value)
}

// Roman values array
let firstArr = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]

let secondArr = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "C"]

let thirdArr = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "M"]

let fourthArr = ["", "M", "MM", "MMM"]

// Decimal to Roman Converter

const decimalToRoman = () => {
    let inputNumStrVal = inputNum.value.split('')

    let inputNumStrValLength = inputNumStrVal.length;

    let zerothDigit = parseInt(inputNumStrVal[0])

    let firstDigit = parseInt(inputNumStrVal[1])

    let secondDigit = parseInt(inputNumStrVal[2])

    let thirdDigit = parseInt(inputNumStrVal[3])

    let answer;

    switch (inputNumStrVal.length) {
        case 1:
            answer = firstArr[zerothDigit];
            break;
        case 2:
            answer = secondArr[zerothDigit] + firstArr[firstDigit];
            break;
        case 3:
            answer = thirdArr[zerothDigit] + secondArr[firstDigit] + firstArr[secondDigit];
            break;
        case 4:
            answer = fourthArr[zerothDigit] + thirdArr[firstDigit] + secondArr[secondDigit] + firstArr[thirdDigit];
            break;
        default:
            answer = ''
    }


    return resultDiv.textContent = answer;

}


// Test Cases
const testCases = () => {
    let parsedValue = numHandler();

    switch (true) {
        case isNaN(parsedValue):
            resultDiv.textContent = 'Please enter a valid number';
            break;
        case (parsedValue < 1):
            resultDiv.textContent = 'Please enter a number greater than or equal to 1'
            break;
        case (parsedValue > 3999):
            resultDiv.textContent = 'Please enter a number less than or equal to 3999'
            break;
        default:
            decimalToRoman()
    }
}

convertButton.addEventListener('click', () => {
    testCases()
})

inputNum.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        testCases()
    }
})