// pages/component/topBar/topBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    activeFlag: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeFlag: 'hotMovie'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeMovieType1(){
    	console.log('hotMovie')
    	this.setData({
    		activeFlag: 'hotMovie'
    	})
    },
    changeMovieType2(){
    	console.log('soonMovie')
    	this.setData({
    		activeFlag: 'soonMovie'
    	})
    }
  }
})
