// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: '',
    num: '',
    user: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      data: options.data,
      num: options.num,
      user: options.user,
      title: options.title,
      content: options.content
    })
    console.log(this.data.data)
  },

  ClickIndex: function () {
    wx.redirectTo({
      url: '../start/start',
    })
  }
})