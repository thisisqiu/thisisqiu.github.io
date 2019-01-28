// pages/mycar/mycar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carList:[],
    total:0,
    all:false,
  },

//减
  reduce(e){
    let num = e.target.dataset.num;
    let _id = e.target.dataset._id;
    if(num >= 1){
      wx.request({
        url: 'http://47.93.229.143:3600/wechat/updateNum',
        method:'post',
        data:{
          _id:_id,
          num:-1
        },
        success:(res)=>{
          let total = 0;
          let arr = this.data.carList.map((i) => {
            if(i._id == _id) {
              --i.num;
            }
            if(i.check){
              total += i.goodsprice * i.num * 1
            }
            return i
          })
          this.setData({
            carList: arr,
            total
          })
        }
      })
    }
  },

//加
  add(e){
    let num = e.target.dataset.num;
    let _id = e.target.dataset._id;
    if (num <= 99) {
      wx.request({
        url: 'http://47.93.229.143:3600/wechat/updateNum',
        method: 'post',
        data: {
          _id: _id,
          num: 1
        },
        success: (res) => {
          let total = 0;
          let arr = this.data.carList.map((i) => {
            if (i._id == _id) {
              ++i.num;
            }
            if (i.check) {
              total += i.goodsprice * i.num * 1
            }
            return i
          })
          this.setData({
            carList: arr,
            total
          })
        }
      })
    }
  }, 

  checkAll(e){
    this.setData({
      all:!this.data.all
    })
    let total = 0;
    let arr = this.data.carList.map((item)=>{
      item.check = this.data.all;
      if(item.check){
        total += item.goodsprice * item.num * 1;
      }
      return item;
    })
    this.setData({
      carList:arr,
      total
    })

  },

  checkOne(e){
    // console.log(e);
    let goodid = e.target.dataset.goodid;
    let arr = this.data.carList.map((item)=>{
      if(item.goodsid == goodid){
        item.check = !item.check;
      }
      return item;
    })

    let total = 0;
    let all = true;
    arr.forEach((item)=>{
      if(item.check){
        total += item.goodsprice * item.num * 1;
      }else{
        all = false;
      }
    })
    console.log(all);
    this.setData({
      carList:arr,
      total,
      all
    })
  },

  //删除
  del(e){
    let _id = e.target.dataset._id;
    console.log(_id)
    wx.request({
      url: 'http://47.93.229.143:3600/wechat/del',
      method: 'post',
      data: {
        _id: _id
      },
      success: (res) => {
        let total = 0;
        let arr = [];
        let all = true;
        this.data.carList.forEach((i) => {
          if (i._id != _id) {
            arr.push(i);
          }
        })
        arr.map((i)=>{
          if (i.check) {
            total += i.goodsprice * i.num * 1
          } else {
            all = false
          }
        })
        if(arr.length <= 0){
          all = false
        }
        this.setData({
          carList: arr,
          total,
          all
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
    if (wx.getStorageSync('loginFlag')) {
      wx.request({
        url: 'http://47.93.229.143:3600/wechat/getMyCarInfo',
        method:'post',
        data:{
          username:wx.getStorageSync('username')
        },
        success:(res)=>{
          this.setData({
            carList:res.data,
            all:false,
            total:0
          })
        }
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '还未登录,请前往「我的」登录 ！ ',
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
            wx.switchTab({
              url: '../home/home',
            })
          }
        }
      })
    }
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