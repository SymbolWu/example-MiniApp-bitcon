//index.js
//获取应用实例
import TickerItem from './entity'
import { quotationItem, ticker, bitcoinImg } from '../mockData'
Page({
  data: {
    quotationItem: quotationItem,
    activeTab: 0,
    showList: [],
    bitcoinImg,
    listTitle: ['名称', '最新价', '24h涨跌']
  },
  onLoad: function() {
    this.setData({
      showList: this.handleShowList(ticker[quotationItem[0].value]),
    })
    // console.log('this:', this.handleShowList(ticker[quotationItem[0].value]));

  },
  handleTabClick({ index }) {
    this.setData({
      activeTab: index,
      showList: this.handleShowList(ticker[quotationItem[index].value])
    });
  },
  handleTabChange({ index }) {
    this.setData({
      activeTab: index,
      showList: this.handleShowList(ticker[quotationItem[index].value])
    });
  },
  handleShowList(list) {
    const newList = list.map(item => new TickerItem(item));
    return newList;
  }
})