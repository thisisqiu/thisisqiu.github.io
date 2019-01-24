// pages/home/home.js

import { getRandomColor } from "../../utils/util.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
      swiperUrl: [
        "https://www.starbucks.com.cn/assets/images/featured/2019cny1/kv2.jpg",
        "https://www.starbucks.com.cn/assets/images/featured/2019cny1/kv1.jpg",
        "https://www.starbucks.com.cn/assets/images/featured/2019cny1/kv-0.jpg"
      ],
    videoSrc:'https://artwork.starbucks.com.cn/video/STARBUCKS_20th_eSPORT_PLAYER_70sec_JAN16V1.mp4',
    userInfo: { username: 'zuozuomu', password: 'adc123'},
    modalData: {
      modalHidden: true,
      username: 'xxx',
      password: ""
    },
    actionsheetData: {
      actionsheetHidden: true,
      items: ["办理护照", "办理签证", '办理移民', "暂停办理"]
    },
    danmuList: [
      {
        text: '美味就在此时此刻~',
        color: '#9e745b',
        time: 3
      }
      ],
      txt:'',
  },

  add(){
    this.setData({
      count:++this.data.count
    })
  },

  //获取弹幕input的内容
  bindInputBlur(e){
    this.setData({
      txt:e.detail.value
    })
  },

  //修改txt
  bindSendDanmu(){
    this.videoCtx.sendDanmu({
      text:this.data.txt,
      color:getRandomColor()
    })
    this.setData({
      txt:''
    })
  },

  //按钮发送
  bindButtonTap(){
    const that = this;
    wx.chooseVideo({
      sourceType:['album','camera'],
      maxDuration:60,
      camera:['front','back'],
      success(res){
        that.setData({
          videoSrc: res.tempFilePath
        })
      }
    })
  },

  showModal(){
    const that = this;
    wx.showModal({
      title:'警告',
      content:'正在使用非WiFi网络,播放将产生流量费用',
      cancelText:'取消观看',
      cancelColor:'#000',
      confirmText:'继续观看',
      confirmColor:'#000',
      success(res){
        if(res.confirm){
          wx.showToast({
            title:`继续观看`,
            duration:1000
          })
          wx.setStorageSync('playType', true);
          that.videoCtx.play();
        }else if(res.cancel){
          wx.showToast({
            title: `请切换WiFi网络`,
            duration:1000
          })
          wx.setStorageSync('playType',false)
        }
      }
    })
  },
  
  //播放
  videoPlay(){
    if (!wx.getStorageSync('playType')){
      this.videoCtx.pause();
      this.showModal();
    }
  },
  
  //监听播放状态
  videoplaying() {
    if (!wx.getStorageSync('playType')) {
      this.videoCtx.pause();
      this.showModal();
    }
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorageSync('username', '');
    wx.setStorageSync('loginFlag', false);
    wx.setStorageSync('userPic', '');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoCtx = wx.createVideoContext('showVideo');

    wx.getNetworkType({
      success(res) {
        const networkType = res.networkType;//网络状态
        // console.log(networkType);
        if(networkType != 'wifi'){
          wx.setStorageSync('playType',false);
        }else{
          wx.setStorageSync('playType', true);
        }
      },
    })
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