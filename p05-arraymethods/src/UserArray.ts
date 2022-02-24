import { User, createRandomUser } from './User';

export class UserArray {

  private _users: User[] = [];

  get users() {
    return this._users;
  }

  public getLastUser() {
    return this._users[this._users.length - 1];
  }

  // ユーザーの追加
  public async addUser() {
    const user = await createRandomUser()
    this._users.push(user);
    return user;
  }

  // 金額をX倍にする
  public multiplyMoneyBy(by: number) {
    this.users.forEach(user => user.multiplyMoneyBy(by));
  }

  // 金額でユーザーを絞り込む
  public searchByMoney(betweenFrom: number, betweenTo: number) {
    const searchedUsers = [] as User[];
    this.users.forEach(user => {
      if(user.money >= betweenFrom && user.money <= betweenTo) {
        searchedUsers.push(user);
      }
    });
    return searchedUsers;
  }

  public sortUsersOrderedByMoney() {
    this.users.sort((user1, user2) => user2.money - user1.money);
  }

}