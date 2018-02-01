// pages/poetry/poetry.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: [],
    hidden: false,
    data: "",
    data_num: 0,
    num: 5,
    type: 1,
    yayuntype: 1,
    key: '',
    user: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getUserInfo({
      success: function (user) {
        that.setData({
          userInfo: user.userInfo,
        })
      }
    })
    this.setData({
      num: options.num,
      type: options.type,
      yayuntype: options.yayuntype,
      key: options.key,
      user: options.user,
    });
    wx.request({
      url: 'https://wx.92see.cn/xieshi/Post.php', //仅为示例，并非真实的接口地址
      data: {
        num: this.data.num,
        type: this.data.type,
        yayuntype: this.data.yayuntype,
        key: this.data.key,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({ data: res.data.showapi_res_body.list, hidden:true})
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var path = '/pages/share/share?num=' + this.data.num + '&data=' + this.data.data[this.data.data_num] + '&user=' + this.data.user;
    return {
      title: '饮酒作诗,来看我的诗—饮诗',
      desc: '',
      path: path
    }
  },

  ClickChang: function () {
    console.log(this.data.data_num)
    if (this.data.data_num < 5) {
      this.setData({ data_num: (this.data.data_num) * 1 + 1 })
    }
    else {
      this.setData({ data_num: 0 })
    }
    console.log(this.data.data_num)
  }
})