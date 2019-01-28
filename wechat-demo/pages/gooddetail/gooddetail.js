// pages/gooddetail/gooddetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    good:{},
    count:1,
    carCount:0
  },

  //减
  desc(){
    if(this.data.count > 1){
      this.setData({
        count: --this.data.count
      })
    }
  },

  //加
  add(){
    if (this.data.count < 100) {
      this.setData({
        count: ++this.data.count
      })
    }
  },

//商品数量设置
  setCount(e){
    if (e.detail.value > 0 ){
      this.setData({
        count: e.detail.value
      })
    }
  },

  //加入购物车
  addCar(){
    if(wx.getStorageSync('loginFlag')){
      wx.request({
        url:'http://47.93.229.143:3600/wechat/addMyShoppingCar',
        method:'post',
        data:{
          username: wx.getStorageSync('username'),
          arr:this.data.good,
          num:this.data.count
        },
        success:(res)=>{
          this.setData({
            carCount:this.data.carCount + this.data.count
          })
          wx.showToast({
            title: '加入购物车成功',
          })
        }
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '尚未登录,请前往「我的」登录 ！ ',
        cancelText: "暂不登录",
        cancelColor: "#333",
        confirmText: "前往登录",
        confirmColor: "#a375ce",
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.switchTab({
              url: '../my/my',
            })
          } else if (res.cancel) {
            
          }
        }
      })
    }
  },

  goToCar(){
    // if(wx.getStorageSync('username')){
      wx.switchTab({
        url: '../mycar/mycar',
      })
    // }  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载数据,请稍候...',
    })

    wx.request({
      url:'http://47.93.229.143:3600/wechat/getGoodsInfo',
      data:{
        id:options.goodId
      },
      success:(res)=>{
        wx.hideLoading();
        // console.log(res.data)
        this.setData({
          good:res.data
        })
        wx.setNavigationBarTitle({
          title: res.data.title
        })
        wx.showToast({
          title:'加载成功'
        })
      }
    })

    if(wx.getStorageSync('loginFlag')){
      wx.request({
        url: 'http://47.93.229.143:3600/wechat/getCount',
        method:'post',
        data:{
          username: wx.getStorageSync('username'),
        },
        success:(res)=>{
          console.log(res);
          this.setData({
            carCount:res.data.count
          })
        }
      })
    }
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