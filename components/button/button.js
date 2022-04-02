// components/button/button.js
const computedBehavior = require('../../behaviors/computedBehavior.js')
Component({
  behaviors: [computedBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: String,
      value: 'default' // 可选值: primary, info, danger, warning
    },
    size: {
      type: String,
      value: 'normal' // 可选值: large, normal, small, mini
    },
    text: {
      type: String,
      value: ''
    },
    nativeType: {
      type: String,
      value: 'button' // 可选值submit, reset, button
    },
    block: {
      type: Boolean,
      value: false
    },
    plain: {
      type: Boolean,
      value: false
    },
    square: {
      type: Boolean,
      value: false
    },
    round: {
      type: Boolean,
      value: false
    },
    loading: {
      type: Boolean,
      value: false
    },
    loadingSize: {
      type: String,
      value: '40rpx'
    },
    loadingText: {
      type: String,
      value: ''
    },
    hairline: {  // 是否为细边框0.5px
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    bottomAction: {
      type: Boolean,
      value: false
    },
    openType: {
      type: String,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    classes: []
  },
  // computed: {
  //   classes () {
  //     console.log(this)
  //     let {type, size, loading, disabled, hairline, block, plain, round, square, bottomAction} = this.properties
  //     let classes = [
  //       'fy-button',
  //       `fy-button--${type.value}`,
  //       `fy-button--${size.value}`,
  //       loading.value ? 'fy-button--loading' : '',
  //       disabled.value ? 'fy-button--disabled' : '',
  //       hairline.value ? 'fy-button--hairline' : '',
  //       block.value ? 'fy-button--block' : '',
  //       plain.value ? 'fy-button--plain' : '',
  //       round.value ? 'fy-button--round' : '',
  //       square.value ? 'fy-button--square': '',
  //       bottomAction.value ? 'fy-button--bottom-action' : '',
  //       hairline.value ? 'fy-hairline--surround' : ''
  //     ]

  //     return classes
  //   }
  // },
  attached() {
    this._setClasses()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    _setClasses() {
      const {type, size, loading, disabled, hairline, block, plain, round, square, bottomAction} = this.data
      const btnClasses = [
        'fy-button',
        `fy-button--${type}`,
        `fy-button--${size}`,
        loading ? 'fy-button--loading' : '',
        disabled ? 'fy-button--disabled' : '',
        hairline ? 'fy-button--hairline' : '',
        block ? 'fy-button--block' : '',
        plain ? 'fy-button--plain' : '',
        round ? 'fy-button--round' : '',
        square ? 'fy-button--square': '',
        bottomAction ? 'fy-button--bottom-action' : '',
        hairline ? 'fy-hairline--surround' : ''
      ]
      this.setData({
        classes: btnClasses
      })
    },
    onTapBtn(ev) {
      this.triggerEvent('tapBtn', ev)
    },
    onTouchStart(ev) {
      this.triggerEvent('touchstartBtn', ev)
    }
  }
})
