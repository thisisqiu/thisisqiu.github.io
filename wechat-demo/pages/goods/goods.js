// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [
      { title: "奶油蛋糕", type: "1" },
      { title: "慕斯蛋糕", type: "2" }
    ],
    imgUrl: "https://www.starbucks.com.cn",
    goodsList: [],
    show: false,
    activeId: 0,
    current: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this.data.navList)
    wx.request({
      url: 'http://47.93.229.143:3600/wechat/getGood',
      success: (res) => {
        this.setData({
          goodsList: res.data,
          show: true
        })
        // console.log(this.data.goodsList)
      }
    })
  },

  swiperChange(e){
    console.log('swiperChange的e')
    console.log(e);
    this.setData({
      activeId:e.detail.current
    })
  },

  changeActiveId(e){
    console.log('changeActivedId的e')
    console.log(e);
    this.setData({
      activeId: e.target.dataset.index,
      current: e.target.dataset.index
    })
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