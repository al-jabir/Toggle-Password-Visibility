const password = document.querySelector('#password');

const togglePassword = document.querySelector('#togglePassword');
const showIcon = document.querySelector('.bi');

console.log(showIcon);

togglePassword.addEventListener('click', function () {
  const type =
    password.getAttribute('type') === 'password' ? 'text' : 'password';
  console.log(type);

  password.setAttribute('type', type);

  showIcon.classList.toggle('bi-eye');
});
