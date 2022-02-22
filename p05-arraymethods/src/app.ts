import { UserArray } from './UserArray';

const userArray = new UserArray();
const main = document.getElementById('main')! as HTMLElement;
const addUserButton = document.getElementById('add-user')! as HTMLButtonElement;

// ユーザーの追加
async function addUser() {
  const addedUser = await userArray.addUser();
  const div = document.createElement('div');
  div.classList.add('person');
  div.innerHTML = `<strong>${addedUser.name}</strong>${addedUser.getMoneyWithFormat()}`;
  main.appendChild(div);
}

addUserButton.addEventListener('click', addUser);