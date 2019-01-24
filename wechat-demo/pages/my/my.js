// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:'http://placehold.it/300x200',
    show:false,
    userPic:'',
    nickName:'未登录'
  },

  //拍照
  photo(){
    var that = this;
    wx.chooseImage({
      count:1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        const tempFilePaths = res.tempFilePaths
        that.setData({
          imgUrl: tempFilePaths,
        })
      },
    })
  },

  //获取用户信息
  getUserInfo() {
    var that = this;
    console.log("获取用户信息");
    wx.login({
      success(res) {
        wx.getUserInfo({
          success(res) {
            console.log(res)
            const userInfo = res.userInfo
            const nickName = userInfo.nickName
            const avatarUrl = userInfo.avatarUrl
            const gender = userInfo.gender // 性别 0：未知、1：男、2：女
            const province = userInfo.province
            const city = userInfo.city
            const country = userInfo.country;
            // console.log(res);
            that.setData({
              userPic: avatarUrl,
              nickName,
              show:!that.data.show
            })
            wx.setStorageSync('username', nickName);
            wx.setStorageSync('loginFlag', true);
            wx.setStorageSync('userPic', avatarUrl);
          }
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})