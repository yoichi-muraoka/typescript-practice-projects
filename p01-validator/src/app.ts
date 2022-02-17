import { Validator } from './validator';

const validator = new Validator();

// フォームと各入力欄の取得
const form = document.getElementById('form')! as HTMLFormElement;
const username = document.getElementById('username')! as HTMLInputElement;
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