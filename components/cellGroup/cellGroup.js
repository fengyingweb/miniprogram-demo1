// components/cellGroup/cellGroup.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },

    border: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    classes: []
  },
  attached() {
    this._setClasses()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    _setClasses() {
      const {border} = this.data;
      const classList = ['fy-cell-group', border ? 'fy-hairline--top-bottom' : '']
      this.setData({
        classes: classList
      })
    }
  }
})
