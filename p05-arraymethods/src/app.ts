import { User } from './User';
import { UserArray } from './UserArray';

const userArray = new UserArray();
const main = document.getElementById('main')! as HTMLElement;
const addUserButton = document.getElementById('add-user')! as HTMLButtonElement;
const doubleButton = document.getElementById('double')! as HTMLButtonElement;
const showMillionairesButton = document.getElementById('show-millionaires')! as HTMLButtonElement;
const sortButton = document.getElementById('sort')! as HTMLButtonElement;
const calculateButton = document.getElementById('calculate-wealth')! as HTMLButtonElement;

// ユーザーの追加
async function addUser() {
  // 配列内のデータを更新
  await userArray.addUser();
  // 表示
  createPersons(userArray.users);
}

// 金額を2倍にする
function doubleMoney() {
  userArray.multiplyMoneyBy(2);
  createPersons(userArray.users);
}

// ミリオネアで絞り込む
function showMillionaires() {
  const millionaires = userArray.searchByMoney(1_000_000, 999_999_999_999);
  createPersons(millionaires as User[]);
}

// 金額が大きい順に並べる
function sortByRichest() {
  userArray.sortUsersOrderedByMoney();
  createPersons(userArray.users);
}

// #main内のdivをクリアする
function clearPersons() {
  const persons = document.querySelectorAll('#main div');
  if(persons != null) [...persons].forEach(person => person.remove());
}

// 配列を元にdiv.personを作成する
function createPersons(users: User[]) {
  clearPersons();
  users.forEach(user => {
    const div = document.createElement('div');
    div.classList.add('person');
    div.innerHTML = `<strong>${user.name}</strong>${user.getMoneyWithFormat()}`;
    main.appendChild(div);
  });
}

// 合計を表示する
function showTotal() {
  document.querySelector('#main div:not(.person)')?.remove();
  const element = document.createElement('div');
  element.innerHTML = `<h3>Total Width<strong>${userArray.getTotalWithFormat()}</strong></h3>`;
  main.appendChild(element);
}

addUserButton.addEventListener('click', addUser);
doubleButton.addEventListener('click', doubleMoney);
showMillionairesButton.addEventListener('click', showMillionaires);
sortButton.addEventListener('click', sortByRichest);
calculateButton.addEventListener('click', showTotal);