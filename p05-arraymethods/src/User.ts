export class User {

  public constructor(private _name: string, private _money : number) {
    this._name = _name;
    this._money = _money;
  }

  // 所持金を2倍にするメソッド
  public double() {
    this._money *= 2;
  }

  // 所持金をフォーマットして返すメソッド
  public getMoneyWithFormat() {
    return '$' + this._money.toLocaleString();
  }

  // Getters
  get name() {
    return this._name;
  }

  get money() {
    return this._money;
  }

}

export async function createRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();
  const name = data.results[0].name;
  const money =  Math.floor(Math.random() * 1000000);
  return new User(`${name.title}.${name.first} ${name.last}`, money);
}