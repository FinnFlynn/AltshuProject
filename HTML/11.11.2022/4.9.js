let userLogin = 'admin'
let userPassword = 'password'

window.onload
let userLoginForm = prompt('Логин')
let userPasswordForm = prompt('Пароль')

if (userLogin != userLoginForm && userPassword != userPasswordForm) {
    alert('Неа')
}
else {
    alert('Хорошо')
}