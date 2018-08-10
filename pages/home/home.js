const server = require('../../utils/server.js')
const { MOVIE_DATA_URL, EXPECTEDMOVIE_DATA_URL } = server;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeFlag: 'hotMovie',
    hotMovieList: [],
    expectedMovie: []
  },
  getSoonMovie(event) {
    this.setData({
    	activeFlag: 'soonMovie'
    })
    wx.request({
    	url: EXPECTEDMOVIE_DATA_URL, 
    	data: {
    		x: '' ,
    		y: ''
    	},
    	header: {
    			'content-type': 'application/json' // 默认值
    	},
    	success: (res) => {
        console.log(res)
    		console.log( res.data[0].img.replace('w.h','128.180') )
    		res.data.map( (item)=>{
    			item.img = item.img.replace('w.h','128.180')
    		} );
    		// console.log(res.data)
    		this.setData({
    			expectedMovie: res.data
    		})
    	}
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: MOVIE_DATA_URL, 
      data: {
         x: '' ,
         y: ''
      },
      header: {
          'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        console.log( res.data[0].img.replace('w.h','128.180') )
        res.data.map( (item)=>{
          item.img = item.img.replace('w.h','128.180')
        } );
        // console.log(res.data)
        this.setData({
          hotMovieList: res.data
        })
      }
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