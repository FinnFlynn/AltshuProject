// function success() {
//   return alert('Данные успешно отправлены');
// }

let nameBlockText;
let emailBlockText;
let textBlockText;
let lastAlertText = 'Сообщений пока не было';

function nameBlock() {
  nameBlockText = name_block.value
  return nameBlockText;
};

function emailBlock() {
  emailBlockText = email_block.value
  return emailBlockText;
};

function textBlock() {
  textBlockText = text_block.value;
  return textBlockText;
};

function onSubmit() {
  lastAlertText = `
    Сообщение Успешно отправлено\n
    Кнопка для закрытия формы находится сверху\n
    Имя:  ${nameBlockText}\n
    Почта:  ${emailBlockText}\n
    Сообщение:  ${textBlockText}'`
  return alert(lastAlertText);
}

function lastAlert() {
  return alert(lastAlertText)
}