// components/cell/cell.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    icon: String,
    size: String, // 可选值large
    center: {
      type: Boolean,
      value: false
    },
    isLink: {
      type: Boolean,
      value: false
    },
    required: {
      type: Boolean,
      value: false
    },
    titleClass: String,
    valueClass: String,
    labelClass: String,
    title: String,
    value: String,
    label: String,
    border: {
      type: Boolean,
      value: true
    },
    clickable: {
      type: Boolean,
      value: false
    },
    arrowDirection: String // 可选值left up down
  },

  /**
   * 组件的初始数据
   */
  data: {
    wrapperClasses: [],
    rightClasses: []
  },
  attached() {
    this._setClasses()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    _setClasses() {
      const {center, required, border, isLink, clickable, size, arrowDirection} = this.data
      const wClasses = [
        'fy-cell',
        center ? 'fy-cell--center' : '',
        required ? 'fy-cell--required' : '',
        !border ? 'fy-cell--borderless' : '',
        (isLink || clickable) ? 'fy-cell--clickable' : '',
        size ? `fy-cell-${size}` : ''
      ]
      const rClasses = ['fy-cell__right-icon', 'arrow', arrowDirection ? `arrow-${arrowDirection}` : '']
      this.setData({
        wrapperClasses: wClasses,
        rightClasses: rClasses
      })
    }
  }
})
