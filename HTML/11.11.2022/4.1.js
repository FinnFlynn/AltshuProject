let userAge = prompt('Ваш возраст', [32]);
let closeAgeForm = false;
while (closeAgeForm == false) {
    userAge == 'Отмена'
        ? closeAgeForm = true
        : userAge === ''
            ? (alert('Введите арабскими цифрами без пробелов. Для отмены напечатейте: \'Отмена\''),
                userAge = prompt('Ваш возраст', [32])
            )
            : (userAge *= 1,
                console.log(userAge),
                isNaN(userAge)
                    ? (alert('Введите арабскими цифрами без пробелов. Для отмены напечатейте: \'Отмена\''),
                        userAge = prompt('Ваш возраст', [32])
                    )
                    : (closeAgeForm = true, userAge < 12
                        ? alert('К сожалению доступ зарещен. Вы слишком молоды..')
                        : userAge > 99
                            ? alert('Моё почтение. Добро пожаловать.')
                            : alert('Добро пожаловать.')
                    )
            );
}
