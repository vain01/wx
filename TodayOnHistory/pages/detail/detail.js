const util = require("../../utils/util.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: false,
    detail: {}
  },
  onLoad:function(param){
    // 页面初始化 param为页面跳转所带来的参数
    var self=this
    util.getDetail(param.id).then(function(data){
      self.setData({
        detail:data[0]
      })
    })
  },
  onReady:function(){
    // 页面渲染完成
    wx.setNavigationBarTitle({
      title: this.data.detail.title,
    })
    this.setData({
      hidden:true
    })
  }
})