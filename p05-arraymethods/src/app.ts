import { User } from './User';
import { UserArray } from './UserArray';

const userArray = new UserArray();
const main = document.getElementById('main')! as HTMLElement;
const addUserButton = document.getElementById('add-user')! as HTMLButtonElement;
const doubleButton = document.getElementById('double')! as HTMLButtonElement;

// ユーザーの追加
async function addUser() {
  const addedUser = await userArray.addUser();
  showUser(addedUser);
}

// 金額を2倍にする
function doubleMoney() {
  userArray.multiplyMoneyBy(2);
  console.log(userArray.users);
}

// ユーザーの表示
function showUser(addedUser: User) {
  const div = document.createElement('div');
  div.classList.add('person');
  div.innerHTML = `<strong>${addedUser.name}</strong>${addedUser.getMoneyWithFormat()}`;
  main.appendChild(div);
}

// 表示されている情報の更新
function updateUsers() {
  const persons = document.querySelectorAll('.person');
  if(persons == null) return;
  persons.forEach(person => {});
}

addUserButton.addEventListener('click', addUser);
doubleButton.addEventListener('click', doubleMoney);