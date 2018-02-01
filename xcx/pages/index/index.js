// pages/create/create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:[],
    Num: [
      { id: 5, name: '五言' },
      { id: 7, name: '七言' }
    ],
    Type: [
      { id: 0, name: '藏头' },
      { id: 1, name: '藏尾' },
      { id: 2, name: '藏中' },
      { id: 3, name: '递增' },
      { id: 4, name: '递减' }
    ],
    Yayun: [
      { id: 0, name: '双句一压' },
      { id: 1, name: '双句押韵' },
      { id: 2, name: '一三四押' }
    ],
    Num_Index: 0,
    Type_Index: 0,
    Yayun_Index: 0,
    num: 5,
    type: 1,
    yayuntype: 1,
    key:'',
    user:'',
    shang:''
  },

  InputKey :function(e) {
    this.setData({
      key: e.detail.value
    })
  },

  InputUser: function (e) {
    this.setData({
      user: e.detail.value
    })
  },

  ChangNum: function (e) {
    if (e.detail.value == 0) {
      this.setData({ num: 5, Num_Index: e.detail.value });
    }
    else {
      this.setData({ num: 7, Num_Index: e.detail.value });
    }
  },
  ChangType: function (e) {
    this.setData({
      type: (e.detail.value) * 1 + 1,
      Type_Index: e.detail.value
    })
  },
  ChangYayun: function (e) {
    this.setData({
      yayuntype: (e.detail.value) * 1 + 1,
      Yayun_Index: e.detail.value
    })
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
  },

  ClickTijiao: function () {
    if (this.data.key == ''){
      wx.showToast({
        title: '诗意不能为空',
        icon: 'none',
        duration: 2000
      })
    }
    else{
      if (this.data.user == '') {
        this.setData({ user: this.data.userInfo.nickName})
      }
    wx.navigateTo({
      url: '../poetry/poetry?num='+this.data.num+'&type='+this.data.type+'&yayuntype='+this.data.yayuntype+'&key='+this.data.key+'&user='+this.data.user,
    })
    }
  },

  ClickShang:function() {
    this.setData({shang:1})
  },

  NoShang:function() {
    this.setData({ shang: '' })
  },

  YesShang:function() {
    var that = this;
    wx.downloadFile({
      url: 'https://wx.92see.cn/xieshi/images/shang.jpg',
      success: function(res) {
        console.log(res)
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: function (res) {
            that.setData({
              shang:''
            })
            wx.showToast({
              title: '保存成功,之后可以识别打赏',
              icon: 'none',
              duration: 2000
            })
          },
          fail: function (res) {
            wx.showToast({
              title: '保存失败,请稍后再试',
              icon: 'none',
              duration: 2000
            })
          }
        })  
      },
      fail: function(res) {
        wx.showToast({
          title: '网络请求失败,请稍后再试',
          icon: 'none',
          duration: 2000
        })
      },
    })
  }
})