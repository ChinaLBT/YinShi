// pages/start/start.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (user) {
              that.setData({
                userInfo: user.userInfo,
              })
            }
          })
        }
      }
    })
  },

  Index: function () {
    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          wx.getUserInfo({
            success: function (user) {
              wx.request({
                url: 'https://wx.92see.cn/xieshi/getUserInfo.php',
                header: {
                  'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                },
                data: {
                  code: res.code,
                  avatarUrl: user.userInfo.avatarUrl,
                  nickName: user.userInfo.nickName,
                  city: user.userInfo.city,
                  country: user.userInfo.country,
                  gender: user.userInfo.gender,
                  language: user.userInfo.language,
                  province: user.userInfo.province
                }
              })
              wx.switchTab({
                url: '../index/index',
              })
            },
            fail: function (user) {
              wx.showModal({
                title: '警告',
                content: '未授权获得您的公开信息(昵称、头像)\r功能受限无法使用\r请点击确定授权用户信息',
                success: function (res) {
                  if (res.confirm) {
                    wx.openSetting({
                      success(res) {
                        wx.authorize({
                          scope: 'scope.userInfo',
                          success() {
                            wx.getUserInfo()
                            wx.switchTab({
                              url: '../index/index',
                            })
                          }
                        })
                      }
                    })
                  } else if (res.cancel) {
                    console.log('用户点击取消')
                  }
                }
              })
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
          wx.showToast({
            title: '获取登录信息失败，请稍后再试',
            icon: "none"
          })
        }
      }
    });
    console.log(this.data.userInfo);
  }
})