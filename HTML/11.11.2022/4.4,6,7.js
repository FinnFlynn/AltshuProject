function summCalc(a, b) {
    thisIsNumber(a);
    if (i == false) { return 'Error' };
    thisIsNumber(b);
    if (i == false) { return 'Error' }
    return a * 1 + b * 1
}

function differenceCalc(a, b) {
    thisIsNumber(a);
    if (i == false) { return 'Error' };
    thisIsNumber(b);
    if (i == false) { return 'Error' }
    return a * 1 - b * 1
}

function maxCalc(a, b) {
    thisIsNumber(a);
    if (i == false) { return 'Error' };
    thisIsNumber(b);
    if (i == false) { return 'Error' }

    if (a * 1 > b * 1) {
        return a
    }
    else if (b * 1 > a * 1) {
        return b
    }
    else
        return `${a}=${b}`
}

function thisIsNumber(yourNumber) {
    i = false
    yourNumber == ''
        ? (alert(`${yourNumber} -- это не число`),
            i = false)
        : (
            isNaN(yourNumber * 1)
                ? (alert(`${yourNumber} -- это не число`),
                    i = false)
                : i = true)
    return i
}

let firstNumber = prompt('Введите первое число');
let secondNumber = prompt('Введите второе число');

alert(summCalc(firstNumber, secondNumber))
alert(differenceCalc(firstNumber, secondNumber))
alert(maxCalc(firstNumber, secondNumber))