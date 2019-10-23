export default class TickerItem {
  constructor(item = {}) {
    this.coin = item.coin;
    this.currencyShow = item.currency_show;
    this.exchange = item.exchange;
    this.high = item.high;
    this.low = item.low;
    this.price24hBefore = item.price_24h_before;
    this.last = item.last;

    this.buy = `$${item.ticker.buy}`;
    this.showCoin = item.coin.toUpperCase();
    this.showLow = this.convertToRMB(item.ticker.low);
    this.showHigh = this.convertToRMB(item.ticker.high);
    this.showCoinName = this.showCoinName(item.coin, item.currency_show);
    this.showExchange = this.showExchange(item.exchange);
    this.showBuyRMB = this.convertToRMB(item.ticker.buy);
    this.showFloat = this.showFloat(item.ticker.last, item.ticker.price_24h_before);
  }
  showCoinName(coin, currencyShow) {
    const newCoin = coin.toUpperCase();
    const newCurrencyShow = currencyShow.toUpperCase();
    return `${newCoin}/${newCurrencyShow}`
  }

  showExchange(exchange) {
    const firstLetter = exchange.charAt(0).toUpperCase();
    const otherLetter = exchange.substr(1);
    return `${firstLetter}${otherLetter}`;
  }

  convertToRMB(num) {
    return (num * 7.0788).toFixed(2);
  }

  showFloat(last, price24hBefore) {
    return parseFloat((last - price24hBefore) / price24hBefore * 100).toFixed(2);
  }
}