// pages/sendwrite/sendwrite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    user: '',
    content: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: options.title,
      user: options.user,
      content: options.content
    })
    var that = this;
    wx.getUserInfo({
      success: function (user) {
        console.log(user.userInfo);
        that.setData({
          userInfo: user.userInfo,
        })
      }
    })
  },

  ClickSend: function () {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '禁止发布违规信息\r一经发布将无法修改或删除\r确认发布?',
      success: function (res) {
        if (res.confirm) {
          var timestamp = Date.parse(new Date());
          timestamp = timestamp / 1000;
          var rand = "";
          for (var i = 0; i < 3; i++) {
            var r = Math.floor(Math.random() * 10);
            rand += r;
          }
          var sendid = timestamp + '_' + rand;
          wx.request({
            url: 'https://wx.92see.cn/xieshi/AddWrite.php',
            header: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
            data: {
              sendid: sendid,
              avatarUrl: that.data.userInfo.avatarUrl,
              nickName: that.data.userInfo.nickName,
              title: that.data.title,
              user: that.data.user,
              content: that.data.content,
              time: timestamp
            }
          })
          wx.switchTab({
            url: '../write/write',
          })
        } else if (res.cancel) {
          wx.navigateBack({
            delta: 1
          })
        }
      }
    })
  }
})