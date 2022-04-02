// components/searchInput/searchInput.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 输入的字符串
    inputText: {
      type: String,
      value: ''
    },
    //输入提示信息
    placeholder: {
      type: String,
      value: ''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickRightIcon(e) {
      this.triggerEvent('click-right-icon', e)
    }
  }
})
