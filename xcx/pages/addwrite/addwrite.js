// pages/addwrite/addwrite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:[],
    title:'',
    user:'',
    content:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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

  InputTitle: function(e) {
    this.setData({
      title: e.detail.value
    })
  },

  InputUser: function (e) {
    this.setData({
      user: e.detail.value
    })
  },

  InputContent: function (e) {
    this.setData({
      content: e.detail.value
    })
  },

  ClickSendwrite: function () {
    if (this.data.title == '') {
      wx.showToast({
        title: '诗题不能为空',
        icon: 'none',
        duration: 2000
      })
    }
    else if (this.data.content == ''){
      wx.showToast({
        title: '诗句不能为空',
        icon: 'none',
        duration: 2000
      })
    }
    else {
    if (this.data.user == '') {
      this.setData({
        user: this.data.userInfo.nickName
      })
    }
    wx.navigateTo({
      url: '../sendwrite/sendwrite?title='+this.data.title+'&user='+this.data.user+'&content='+this.data.content,
    })
    }
  }
})