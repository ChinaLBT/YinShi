// pages/lookwrite/lookwrite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    content:'',
    user:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: options.title,
      content: options.content,
      user: options.user
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var path = '/pages/share/share?title=' + this.data.title + '&user=' + this.data.user + '&content=' + this.data.content;
    return {
      title: '原创诗词-《'+this.data.title+'》',
      path: path
    }
  }
})