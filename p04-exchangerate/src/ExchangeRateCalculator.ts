export class ExchangeRateCalculator {

  private fromCurrency = document.getElementById('currency-one')! as HTMLSelectElement;
  private toCurrency = document.getElementById('currency-two')! as HTMLSelectElement;
  private fromAmount = document.getElementById('amount-one')! as HTMLInputElement;
  private toAmount = document.getElementById('amount-two')! as HTMLInputElement;
  private swapButton = document.getElementById('swap')! as HTMLButtonElement;
  private showRateArea = document.getElementById('rate')! as HTMLDivElement;

  public constructor() {
    this.showExchangedResult();
    [this.fromAmount, this.fromCurrency, this.toCurrency].forEach(
        item => item.addEventListener('change', this.showExchangedResult.bind(this))
      );
    this.swapButton.addEventListener('click', this.swap.bind(this));
  }

  private showExchangedResult() {
    fetch('https://open.exchangerate-api.com/v6/latest')
      .then(res => res.json())
      .then(data => this.convert(data.rates));
  }

  private convert(rateList: any) {
    const rate = rateList[this.fromCurrency.value] / rateList[this.toCurrency.value];
    this.showRateArea.innerText = `1 ${this.fromCurrency.value} = ${1 / rate} ${this.toCurrency.value}`;
    const converted = parseInt(this.fromAmount.value) / rate;
    this.toAmount.value = (Math.floor(converted * 100) / 100).toString();
  }

  private swap() {
    const tempFrom = this.fromCurrency.value;
    this.fromCurrency.value = this.toCurrency.value;
    this.toCurrency.value = tempFrom;
    this.showExchangedResult();
  }

}