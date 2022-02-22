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

}