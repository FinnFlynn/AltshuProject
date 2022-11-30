function monthNumberFun(Month) {
    let monthNumber = prompt('Введите номер месяца', [01]);
    thisIsNumber(monthNumber)
    monthNumber *= 1;
    if (i != true || 13 < monthNumber || monthNumber < 1) {
        return "Error"
    }
    else {
        return Month[monthNumber]
    }


}

function thisIsNumber(monthNumber) {
    i = false
    monthNumber == ''
        ? (alert(`${monthNumber} -- это не число`),
            i = false)
        : (
            isNaN(monthNumber * 1)
                ? (alert(`${monthNumber} -- это не число`),
                    i = false)
                : i = true)
    return i
}


let Month = { 1: 'Январь', 2: 'Февраль', 3: 'Март', 4: 'Апрель', 5: 'Май', 6: 'Июнь', 7: 'Июль', 8: 'Август', 9: 'Сентябрь', 10: 'Октябрь', 11: 'Ноябрь', 12: 'Декабрь' }
alert(monthNumberFun(Month))