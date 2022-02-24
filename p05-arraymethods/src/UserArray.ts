import { User, createRandomUser } from './User';

export class UserArray {

  private _users: User[] = [];

  get users() {
    return this._users;
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

  // 金額でユーザーを絞り込む⇒絞り込んだデータを返す
  public searchByMoney(betweenFrom: number, betweenTo: number) {
    const searchedUsers = [] as User[];
    this.users.forEach(user => {
      if(user.money >= betweenFrom && user.money <= betweenTo) {
        searchedUsers.push(user);
      }
    });
    return searchedUsers;
  }

  // 金額の大きい順に並び替える
  public sortUsersOrderedByMoney() {
    this.users.sort((user1, user2) => user2.money - user1.money);
  }

  // 合計金額を計算する
  public getTotal() {
    return this.users.reduce<number>((total, user) => total + user.money, 0);
  }

  // 合計金額をフォーマットして返す
  public getTotalWithFormat() {
    return '$' + this.getTotal().toLocaleString();
  }

}