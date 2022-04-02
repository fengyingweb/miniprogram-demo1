// pages/delivery/delivery.js
import Toast from '@vant/weapp/toast/toast'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    minHeight: app.globalData.height,
    workcenterCode: '',
    formData: {},
    cardConfig: [
      {
          label: '物料编码',
          name: 'itemCode',
          layout: {
              row: 0,
              labelSpan: 6,
              input: true,
              inputProps: {
                  placeholder: '请选择物料编码',
                  rightIcon: 'search',
                  readonly: true
              }
          }
      },
      {
          label: '来源货位',
          name: 'sourceGoodsLocationCode',
          className: 'new-scan',
          layout: {
              row: 1,
              labelSpan: 6,
              scanInput: true,
              scanInputProps: {
                  placeholder: '请输入/选择来源货位',
                  hasKeyboardIcon: false,
                  rightIcon: 'search'
              }
          }
      },
      {
          label: '载具条码',
          name: 'containerBarcode',
          className: 'new-scan',
          layout: {
              row: 2,
              labelSpan: 6,
              scanInput: true,
              scanInputProps: {
                  placeholder: '请输入/选择载具条码',
                  hasKeyboardIcon: false,
                  rightIcon: 'search'
              }
          }
      },
      {
          label: '目标货位',
          name: 'destinationGoodsLocationCode',
          className: 'new-scan',
          layout: {
              row: 3,
              labelSpan: 6,
              scanInput: true,
              scanInputProps: {
                  placeholder: '请输入/选择目标货位',
                  hasKeyboardIcon: false,
                  rightIcon: 'search'
              }
          }
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    Toast('提示信息')
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

  },
  // 重置
  onReset(e) {
    console.log(e)
  },
  // 呼叫 
  onSubmit(e) {
    console.log(e)
  },
  // click头部搜索
  clickSearchIcon(e) {
    console.log(e);
  }
})
