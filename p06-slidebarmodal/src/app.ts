import { Validator } from './validator';

const toggleButton = document.getElementById('toggle')! as HTMLButtonElement;
const modalContainer = document.getElementById('modal')! as HTMLDivElement;
const openButton = document.getElementById('open')! as HTMLButtonElement;
const closeButton = document.getElementById('close')! as HTMLButtonElement;

function toggleNavbar() {
  document.body.classList.toggle('show-nav');
}

function showModal() {
  modalContainer.classList.add('show-modal');
}

function closeModal() {
  modalContainer.classList.remove('show-modal');
}

toggleButton.addEventListener('click', toggleNavbar);
openButton.addEventListener('click', showModal);
closeButton.addEventListener('click', closeModal);
modalContainer.addEventListener('click', e => {
  if(e.target === modalContainer) closeModal();
});


/*---------------------------
        バリデーション
----------------------------*/
const validator = new Validator();

// フォームと各入力欄の取得
const form = document.querySelector('.modal-form')! as HTMLFormElement;
const username = document.getElementById('name')! as HTMLInputElement;
const email = document.getElementById('email')! as HTMLInputElement;
const password = document.getElementById('password')! as HTMLInputElement;
const password2 = document.getElementById('password2')! as HTMLInputElement;

// 送信ボタン押下時の処理
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const isValid = validator.validateMany([
    {input: username, isRequired: true, minLength: 4, maxLength: 10},
    {input: email, isRequired: true, isEmail: true},
    {input: password, isRequired: true, minLength: 6, maxLength: 20, matchWith: password2}
  ]);

  if(isValid) {
    alert('Thank you!');
  }
});