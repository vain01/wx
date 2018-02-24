const util = require('../../utils/util.js')

Page({
  data: {
    hidden:true,
    events:[]     
  },
  onLoad:function(options){
    //页面初始化
    var self=this
    util.getEvents().then(function(data){
      self.setData({
        hidden:true,
        events:data
      })
    })
  }
})
