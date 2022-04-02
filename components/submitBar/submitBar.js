// components/submitBar/submitBar.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    showLeft: {
      type: Boolean,
      value: false
    },
    showRight: {
      type: Boolean,
      value: true
    },
    leftBtnText: {
      type: String,
      value: '取消'
    },
    rightBtnText: {
      type: String,
      value: '提交'
    }
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
    leftBtnTap(e) {
      this.triggerEvent('leftBtnTap', e.detail)
    },

    rightBtnTap(e) {
      this.triggerEvent('rightBtnTap', e.detail)
    }
  }
})
