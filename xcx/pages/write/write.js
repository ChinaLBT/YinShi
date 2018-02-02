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

  LoadWrite: function () {
    var that = this;
    wx.request({
      url: 'https://wx.92see.cn/xieshi/Today.php',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.showapi_res_body.list)
        that.setData({
          write: res.data.showapi_res_body.list,
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
  }
})