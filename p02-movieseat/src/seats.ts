export type state = "occupied" | "selected" | "";

export class Seat {
  // 座席の作成
  public createSeat(state: state) {
    const seatDiv = document.createElement("div") as HTMLDivElement;
    seatDiv.classList.add("seat");
    if (state !== "") {
      seatDiv.classList.add(state);
    }
    seatDiv.addEventListener("click", this.toggleSelect);
    return seatDiv;
  }

  // 座席を横一列分作成
  public createRow(states: state[]) {
    const rowDiv = document.createElement("div") as HTMLDivElement;
    rowDiv.classList.add("row");
    for (let state of states) {
      rowDiv.appendChild(this.createSeat(state));
    }
    return rowDiv;
  }

  // 座席を横一列分作成
  public createEmptyRow(numberOfSeats: number) {
    const rowDiv = document.createElement("div") as HTMLDivElement;
    rowDiv.classList.add("row");
    for (let i = 1; i <= numberOfSeats; i++) {
      rowDiv.appendChild(this.createSeat(""));
    }
    return rowDiv;
  }

  private toggleSelect(e: MouseEvent) {
    const seatDiv = e.target as HTMLDivElement;
    const classList = seatDiv.classList;
    if (classList.contains("occupied")) return;
    if (classList.contains("selected")) {
      classList.remove("selected");
    } else {
      classList.add("selected");
    }
  }

}
