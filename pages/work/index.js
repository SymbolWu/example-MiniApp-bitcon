//index.js
import { ticker } from '../mockData'
import TickerItem from '../../entity/TickerEntity'
Page({
  data: {
    showList: []
  },
  onLoad: function() {
    this.setData({
      showList: this.handleShowList(ticker.btc),
      listTitle:['币种','低价交易所','高价交易所','差价']
    })
  },
  handleShowList(list) {
    const newList = list.map(item => new TickerItem(item));
    return newList;
  }
})
