import { GoodsModel } from '../../models/goods.js'
let goodsModel = new GoodsModel()
Page({
  onLoad: function() {
    goodsModel.getList().then(res => {
      console.log(res)
    })
  }
})