// pages/write/write.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    write: [],
    shuaxin: '0',
    hidden: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.LoadWrite();
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.LoadWrite();
    if (this.data.shuaxin == '0') {
      this.setData({
        shuaxin: '1'
      })
    }
  },

  ClickAdd: function () {
    wx.navigateTo({
      url: '../addwrite/addwrite',
    })
  },

  ClickLook: function (sendid) {
    var nums = this.data.write[sendid.currentTarget.id];
    console.log(nums)
    console.log(sendid.currentTarget.id)
    wx.navigateTo({
      url: '../lookwrite/lookwrite?title=' + nums.title + '&content=' + nums.content + '&user=' + nums.user,
    })
  },

  LoadWrite: function () {
    var that = this;
    wx.request({
      url: 'https://wx.92see.cn/xieshi/Write.php',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          write: res.data,
          hidden: true
        })
        if (that.data.shuaxin == '1') {
          wx.stopPullDownRefresh(
            wx.showToast({
              title: '刷新成功',
              icon: "none"
            })
          );
        }
      },
      fail: function (res) {
        wx.showToast({
          title: '网络请求超时，稍后再试',
          icon: "none"
        })
      }
    })
    console.log(this.data.write)
  }
})