// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    minHeight: app.globalData.height,
    motto: 'AGV 叫料',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    distributeType: [
      {
          name: '送料出库',
          icon: "",
          path: '/pages/delivery/delivery',
          id: 1
      },
      {
          name: "接收入库",
          icon: "",
          path: '/pages/warehousing/warehousing',
          id: 2
      },
       {
          name: '呼叫空车',
          icon: "",
          path: '/pages/callEmptyCar/callEmptyCar',
          id: 3
      },
      {
          name: "任务下发",
          icon: "",
          path: '/pages/task/task',
          id: 4
      }
    ]
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    // if (wx.getUserProfile) {
    //   this.setData({
    //     canIUseGetUserProfile: true
    //   })
    // }
  },
  onReady() {
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  goToTask(e) {
    const {path, id} = e.currentTarget.dataset
    wx.navigateTo({
      url: `${path}?id=${id}`
    })
  }
})
