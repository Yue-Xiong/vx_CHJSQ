//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  test: function () {
    wx.navigateTo({			//以navigate进行跳转
      url: '/pages/jisuanqi/jisuanqi',			//保证路径正确，如果这样书写记得最前面加/，也可以这样写：../demo/demo
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  chi(){
       this.getcode()
  },
  getcode(){
    var code;
    code='';
    var timestamp =Date.parse(new Date());
    var n = timestamp *1000;
    var date = new Date(n);
    var s =date.getSeconds();
    var random=new Array("麻辣鸡丁", "酸菜鱼", "宫保鸡丁","烤鸡","鱼香肉丝","回锅肉","糖醋排骨","石锅三样","烤羊排","红烧肉","水煮虾");
    var id = Math.floor(s/6);
    code = random[id];
    this.setData({
      code: code
    })
  },
  qingchushipu(){
    this.setData({
      code: ''
    })
  }
})
