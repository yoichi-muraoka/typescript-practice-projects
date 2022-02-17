import { state, Seat } from './seats';

export class Theater {
  private container = document.querySelector('.container')! as HTMLDivElement;
  private movie = document.getElementById('movie')! as HTMLSelectElement;
  private count = document.getElementById('count')! as HTMLElement;
  private total = document.getElementById('total')! as HTMLElement;

  public constructor() {
    // 座席情報の読み込み
    this.loadSeats();

    // 座席と映画名に処理を追加
    this.container.addEventListener('click', this.countSelected.bind(this));
    this.movie.addEventListener('change', this.countSelected.bind(this));
  }

  // 座席数のカウント(ついでに座席情報を保存)
  private countSelected() {
    const num = document.querySelectorAll('.container .selected').length;
    const totalPrice = parseInt(this.movie.value) * num;
    this.count.innerText = num.toString();
    this.total.innerText = totalPrice.toString();
    this.saveSeats();
  }

  // 座席の保存
  private saveSeats() {
    const seats = document.querySelectorAll('.container .seat');

    // 座席情報を 空席:0, 選択:1, 予約済み:2 の配列として保存
    const seatStatus = [...seats].map((e) => {
      if(e.classList[1] === 'selected') {
        return 1;
      }
      if(e.classList[1] === 'occupied') {
        return 2;
      }
      return 0;
    });

    // ローカルストレージに保存
    localStorage.setItem('seatStatus', JSON.stringify(seatStatus));
  }

  // 座席の表示
  private loadSeats() {
    // 保存されている座席情報の読み込み
    const seatStatus = localStorage.getItem('seatStatus');
    if(seatStatus != null) {
      const seat = new Seat();
      const statusArray = ['', 'selected', 'occupied'];
      let seatStatusArray = [];
      // 座席情報をJSON.parse()で、配列に変換してから取り出す
      for(let status of JSON.parse(seatStatus)) {
        // 整数(0, 1, 2)の配列情報をクラス名の配列に変換
        seatStatusArray.push(statusArray[parseInt(status)]);
        // 横一列(8席)分の席を追加
        if(seatStatusArray.length % 8 == 0) {
          this.container.append(seat.createRow(seatStatusArray as state[]));
          seatStatusArray = [];
        }
      }
      this.countSelected();
    } else {
      // 保存されている座席情報がない場合、初期設定で表示
      this.initSeats();
    }
  }

  // 座席の初期表示
  private initSeats() {
    const seat = new Seat();
    this.container.append(seat.createEmptyRow(8));
    this.container.append(seat.createEmptyRow(8));
    this.container.append(seat.createRow(['', '', 'occupied', 'occupied', '', '', '', '']));
    this.container.append(seat.createRow(['', '', '', '', 'occupied', '', 'occupied', '']));
    this.container.append(seat.createEmptyRow(8));
  }

}