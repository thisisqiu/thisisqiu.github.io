// components/goodscpt/goodscpt.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    keyword:String,
    types:String,
    goods:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrl: "https://www.starbucks.com.cn",
    dataList:[]
  },

  attached(){
    setTimeout(()=>{
      this.setData({
        dataList: this.properties.goods.filter((good) => good.type == this.properties.types)
        
      })
      // console.log(this.properties.goods)
      // console.log(this.data.dataList)
    },1000)

  
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    upper(){
      setTimeout(() => {
        this.setData({
          mydata: this.data.dataList.reverse()
        })
        wx.showToast({
          title: '刷新成功.',
        })
      }, 1000)
    },
    lower() {
      console.log("加载更多 lower")
      setTimeout(() => {
        this.setData({
          mydata: this.data.dataList.concat(this.data.dataList.slice(0, 4))
        })
        wx.showToast({
          title: '加载更多成功.',
        })
      }, 1000)
    },
    scroll() {
    }
  }
})
