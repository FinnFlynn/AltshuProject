function mathematicsSign(yourNumber) {
    yourNumber *= 1
    if (isNaN(yourNumber * 1))
        alert('Не число')
    else if (yourNumber < 0)
        alert('-1')
    else if (yourNumber > 0)
        alert('1')
    else
        alert('0')
}

let yourNumber = prompt('Введите число')

if (yourNumber == '')
    alert('Не число')
else
    mathematicsSign(yourNumber)