// components/formCard/formCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    formData: {
      type: Object,
      value: {}
    },
    formConfigs: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    maxRow: 0
  },
  observers: {
    formConfigs(nval) {
      this.setData({
        maxRow: this._getMaxRow(nval) + 1
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 计算最大的行数
    _getMaxRow (settings) {
      if (!settings) return 0
      const maxRow = Math.max(...settings.map(item => item.layout.row))
      console.log(maxRow)
      return maxRow
    }
  }
})
