// pages/jisuanqi/jisuanqi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ids: ['的','爸爸','妈妈','哥哥','弟弟','姐姐','妹妹' ,'儿子','女儿','老公','老婆','爷爷','奶奶','外公','外婆','叔伯','姑姑','舅舅','姨妈'],
    AC: '我',
    equ: '是',
    first: '',
    second: '',
    op: '',
    last: '',
    sum: "我",
    a: 0,
    b: 0,
    operator: 0,
    flag: false,    //操作符是否被按下
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  click: function (e) {
    switch (e.target.id) {
      case "爸爸":
        var n = parseInt(e.target.id);
        this.setData({ sum: "爸爸" });
        this.data.flag = false;
        break;
      case "妈妈":
        var n = parseInt(e.target.id);
        this.setData({ sum: "妈妈" });
        this.data.flag = false;
        break;
      case "哥哥":
        var n = parseInt(e.target.id);
        this.setData({ sum: "哥哥" });
        this.data.flag = false;
        break;
      case "弟弟":
        var n = parseInt(e.target.id);
        this.setData({ sum: "弟弟" });
        this.data.flag = false;
        break;
      case "姐姐":
        var n = parseInt(e.target.id);
        this.setData({ sum: "姐姐" });
        this.data.flag = false;
        break;
      case "妹妹":
        var n = parseInt(e.target.id);
        this.setData({ sum: "妹妹" });
        this.data.flag = false;
        break;
      case "儿子":
        var n = parseInt(e.target.id);
        this.setData({ sum: "儿子" });
        this.data.flag = false;
        break;
      case "女儿":
        var n = parseInt(e.target.id);
        this.setData({ sum: "女儿" });
        this.data.flag = false;
        break;
      case "老公":
        var n = parseInt(e.target.id);
        this.setData({ sum: "老公" });
        this.data.flag = false;
        break;
      case "老婆":
        var n = parseInt(e.target.id);
        this.setData({ sum: "老婆" });
        this.data.flag = false;
        break;
      case "爷爷":
        var n = parseInt(e.target.id);
        this.setData({ sum: "爷爷" });
        this.data.flag = false;
        break;
      case "奶奶":
        var n = parseInt(e.target.id);
        this.setData({ sum: "奶奶" });
        this.data.flag = false;
        break;
      case "外公":
        var n = parseInt(e.target.id);
        this.setData({ sum: "外公" });
        this.data.flag = false;
        break;
      case "外婆":
        var n = parseInt(e.target.id);
        this.setData({ sum: "外婆" });
        this.data.flag = false;
        break;
      case "叔伯":
        var n = parseInt(e.target.id);
        this.setData({ sum: "叔伯" });
        this.data.flag = false;
        break;
      case "姑姑":
        var n = parseInt(e.target.id);
        this.setData({ sum: "姑姑" });
        this.data.flag = false;
        break;
      case "舅舅":
        var n = parseInt(e.target.id);
        this.setData({ sum: "舅舅" });
        this.data.flag = false;
        break;
      case "姨妈":
        var n = parseInt(e.target.id);
        this.setData({ sum: "姨妈" });
        this.data.flag = false;
        break;

      case "的":
        this.data.flag = true;
        if (this.data.dot == true)
          this.data.sum = parseFloat(this.data.sum);
        this.data.a = this.data.sum;
        this.data.dot = false;
        var temp = e.target.id;
        this.setData({ first: this.data.sum });
        this.setData({ op: temp });
        this.setData({ sum: " " });
        break;
      case "AC":
        this.data.sum = "我" ;
        this.data.a = "我" ;
        this.data.b = "我" ;
        this.data.operator = "我" ;
        this.data.flag = false;
        this.setData({ sum: "我" });
        this.setData({ first: '' });
        this.setData({ second: '' });
        this.setData({ op: '' });
        this.setData({ last: '' });
        break;
      case "=":
        if (this.data.dot == true)
          this.data.sum = parseFloat(this.data.sum);
        this.data.b = this.data.sum;
        this.setData({ second: this.data.b });
        this.setData({ last: '是' });
        if (this.data.a=="爸爸")
        switch (this.data.b)
        {
          case "爸爸":
            this.setData({ sum: "爷爷" });
            break;
          case "妈妈":
            this.setData({ sum: "奶奶" });
            break;
          case "哥哥":
            this.setData({ sum: "伯伯" });
            break;
          case "弟弟":
            this.setData({ sum: "叔叔" });
            break;
          case "姐姐":
            this.setData({ sum: "姑姑" });
            break;
          case "妹妹":
            this.setData({ sum: "姑姑" });
            break;
          case "儿子":
            this.setData({ sum: "我或兄弟" });
            break;
          case "女儿":
            this.setData({ sum: "我或姐妹" });
            break;
          case "老公":
            this.setData({ sum: "想什么呢" });
            break;
          case "老婆":
            this.setData({ sum: "妈妈" });
            break;
          case "爷爷":
            this.setData({ sum: "曾祖父" });
            break;
          case "奶奶":
            this.setData({ sum: "曾祖母" });
            break;
          case "外公":
            this.setData({ sum: "太姥爷" });
            break;
          case "外婆":
            this.setData({ sum: "太姥姥" });
            break;
          case "叔伯":
            this.setData({ sum: "堂爷爷" });
            break;
          case "姑姑":
            this.setData({ sum: "姑奶奶" });
            break;
          case "舅舅":
            this.setData({ sum: "舅爷爷" });
            break;
          case "姨妈":
            this.setData({ sum: "姨奶奶" });
            break;  
        }
        if (this.data.a == "妈妈")
          switch (this.data.b) {
            case "爸爸":
              this.setData({ sum: "外公" });
              break;
            case "妈妈":
              this.setData({ sum: "外婆" });
              break;
            case "哥哥":
              this.setData({ sum: "舅舅" });
              break;
            case "弟弟":
              this.setData({ sum: "舅舅" });
              break;
            case "姐姐":
              this.setData({ sum: "姨妈" });
              break;
            case "妹妹":
              this.setData({ sum: "姨" });
              break;
            case "儿子":
              this.setData({ sum: "我或兄弟" });
              break;
            case "女儿":
              this.setData({ sum: "我或姐妹" });
              break;
            case "老公":
              this.setData({ sum: "爸爸" });
              break;
            case "老婆":
              this.setData({ sum: "你想多了" });
              break;
            case "爷爷":
              this.setData({ sum: "外曾祖父" });
              break;   
            case "奶奶":
              this.setData({ sum: "外曾祖母" });
              break;   
            case "外公":
              this.setData({ sum: "太外公" });
              break; 
            case "外婆":
              this.setData({ sum: "太外婆" });
              break;   
            case "叔伯":
              this.setData({ sum: "表外公"});
              break;
            case "姑姑":
              this.setData({ sum: "姑姥姥" });
              break;
            case "舅舅":
              this.setData({ sum: "舅公" });
              break;
            case "姨妈":
              this.setData({ sum: "姨姥姥" });
              break;                                  
          }

        if (this.data.a == "哥哥")
          switch (this.data.b) {
            case "爸爸":
              this.setData({ sum: "爸爸" });
              break;
            case "妈妈":
              this.setData({ sum: "妈妈" });
              break;
            case "哥哥":
              this.setData({ sum: "哥哥" });
              break;
            case "弟弟":
              this.setData({ sum: "我或弟弟" });
              break;
            case "姐姐":
              this.setData({ sum: "姐姐" });
              break;
            case "妹妹":
              this.setData({ sum: "我或妹妹" });
              break;
            case "儿子":
              this.setData({ sum: "侄子" });
              break;
            case "女儿":
              this.setData({ sum: "侄女" });
              break;
            case "老公":
              this.setData({ sum: "想多了" });
              break;
            case "老婆":
              this.setData({ sum: "嫂子" });
              break;
            case "爷爷":
              this.setData({ sum: "爷爷" });
              break;
            case "奶奶":
              this.setData({ sum: "奶奶" });
              break;
            case "外公":
              this.setData({ sum: "外公" });
              break;
            case "外婆":
              this.setData({ sum: "外婆" });
              break;
            case "叔伯":
              this.setData({ sum: "叔伯" });
              break;
            case "姑姑":
              this.setData({ sum: "姑姑" });
              break;
            case "舅舅":
              this.setData({ sum: "舅舅" });
              break;
            case "姨妈":
              this.setData({ sum: "姨妈" });
              break;                               
          }          
        if (this.data.a == "弟弟")
          switch (this.data.b) {
            case "爸爸":
              this.setData({ sum: "爸爸" });
              break;
            case "妈妈":
              this.setData({ sum: "妈妈" });
              break;
            case "哥哥":
              this.setData({ sum: "我或哥哥" });
              break;
            case "弟弟":
              this.setData({ sum: "弟弟" });
              break;
            case "姐姐":
              this.setData({ sum: "我或姐姐" });
              break;
            case "妹妹":
              this.setData({ sum: "妹妹" });
              break;
            case "儿子":
              this.setData({ sum: "侄子" });
              break;
            case "女儿":
              this.setData({ sum: "侄女" });
              break;
            case "老公":
              this.setData({ sum: "想什么呢" });
              break;
            case "老婆":
              this.setData({ sum: "弟妹" });
              break;
            case "爷爷":
              this.setData({ sum: "爷爷" });
              break;
            case "奶奶":
              this.setData({ sum: "奶奶" });
              break;
            case "外公":
              this.setData({ sum: "外公" });
              break;
            case "外婆":
              this.setData({ sum: "外婆" });
              break;
            case "叔伯":
              this.setData({ sum: "叔伯" });
              break;
            case "姑姑":
              this.setData({ sum: "姑姑" });
              break;
            case "舅舅":
              this.setData({ sum: "舅舅" });
              break;
            case "姨妈":
              this.setData({ sum: "姨妈" });
              break;                 
          }
        if (this.data.a == "姐姐")
          switch (this.data.b) {
            case "爸爸":
              this.setData({ sum: "爸爸" });
              break;
            case "妈妈":
              this.setData({ sum: "妈妈" });
              break;
            case "哥哥":
              this.setData({ sum: "哥哥" });
              break;
            case "弟弟":
              this.setData({ sum: "我或弟弟" });
              break;
            case "姐姐":
              this.setData({ sum: "姐姐" });
              break;
            case "妹妹":
              this.setData({ sum: "妹妹" });
              break;
            case "儿子":
              this.setData({ sum: "外甥" });
              break;
            case "女儿":
              this.setData({ sum: "外甥女" });
              break;
            case "老公":
              this.setData({ sum: "姐夫" });
              break;
            case "老婆":
              this.setData({ sum: "想多了" });
              break;
            case "爷爷":
              this.setData({ sum: "爷爷" });
              break;
            case "奶奶":
              this.setData({ sum: "奶奶" });
              break;
            case "外公":
              this.setData({ sum: "外公" });
              break;
            case "外婆":
              this.setData({ sum: "外婆" });
              break;
            case "叔伯":
              this.setData({ sum: "叔伯" });
              break;
            case "姑姑":
              this.setData({ sum: "姑姑" });
              break;
            case "舅舅":
              this.setData({ sum: "舅舅" });
              break;
            case "姨妈":
              this.setData({ sum: "姨妈" });
              break;   
          }
        if (this.data.a == "妹妹")
          switch (this.data.b) {
            case "爸爸":
              this.setData({ sum: "爸爸" });
              break;
            case "妈妈":
              this.setData({ sum: "妈妈" });
              break;
            case "哥哥":
              this.setData({ sum: "我或哥哥" });
              break;
            case "弟弟":
              this.setData({ sum: "弟弟" });
              break;
            case "姐姐":
              this.setData({ sum: "我或姐姐" });
              break;
            case "妹妹":
              this.setData({ sum: "妹妹" });
              break;
            case "儿子":
              this.setData({ sum: "外甥" });
              break;
            case "女儿":
              this.setData({ sum: "外甥女" });
              break;
            case "老公":
              this.setData({ sum: "妹夫" });
              break;
            case "老婆":
              this.setData({ sum: "你找一个给我看看" });
              break;
            case "爷爷":
              this.setData({ sum: "爷爷" });
              break;
            case "奶奶":
              this.setData({ sum: "奶奶" });
              break;
            case "外公":
              this.setData({ sum: "外公" });
              break;
            case "外婆":
              this.setData({ sum: "外婆" });
              break;
            case "叔伯":
              this.setData({ sum: "叔伯" });
              break;
            case "姑姑":
              this.setData({ sum: "姑姑" });
              break;
            case "舅舅":
              this.setData({ sum: "舅舅" });
              break;
            case "姨妈":
              this.setData({ sum: "姨妈" });
              break;                 
          }
        if (this.data.a == "儿子")
          switch (this.data.b) {
            case "爸爸":
              this.setData({ sum: "我或老公，并不是老王" });
              break;
            case "妈妈":
              this.setData({ sum: "我或老婆" });
              break;
            case "哥哥":
              this.setData({ sum: "儿子" });
              break;
            case "弟弟":
              this.setData({ sum: "儿子" });
              break;
            case "姐姐":
              this.setData({ sum: "女儿" });
              break;
            case "妹妹":
              this.setData({ sum: "女儿" });
              break;
            case "儿子":
              this.setData({ sum: "孙子" });
              break;
            case "女儿":
              this.setData({ sum: "孙女" });
              break;
            case "老公":
              this.setData({ sum: "估计没有" });
              break;
            case "老婆":
              this.setData({ sum: "儿媳妇" });
              break;
            case "爷爷":
              this.setData({ sum: "爸爸或公公" });
              break;
            case "奶奶":
              this.setData({ sum: "妈妈或婆婆" });
              break;
            case "外公":
              this.setData({ sum: "岳父或父亲" });
              break;
            case "外婆":
              this.setData({ sum: "岳母或妈妈" });
              break;
            case "叔伯":
              this.setData({ sum: "哥哥或弟弟或伯(叔)子" });
              break;
            case "姑姑":
              this.setData({ sum: "姐姐或妹妹或姑子" });
              break;
            case "舅舅":
              this.setData({ sum: "哥哥(弟弟)或小舅子" });
              break;
            case "姨妈":
              this.setData({ sum: "姐姐(妹妹)或小姨子" });
              break;   
          }  
        if (this.data.a == "女儿")
          switch (this.data.b) {
            case "爸爸":
              this.setData({ sum: "我或老公，并不是老王" });
              break;
            case "妈妈":
              this.setData({ sum: "我或老婆" });
              break;
            case "哥哥":
              this.setData({ sum: "儿子" });
              break;
            case "弟弟":
              this.setData({ sum: "儿子" });
              break;
            case "姐姐":
              this.setData({ sum: "女儿" });
              break;
            case "妹妹":
              this.setData({ sum: "女儿" });
              break;
            case "儿子":
              this.setData({ sum: "外孙子" });
              break;
            case "女儿":
              this.setData({ sum: "外孙女" });
              break;
            case "老公":
              this.setData({ sum: "女婿" });
              break;
            case "老婆":
              this.setData({ sum: "估计没有" });
              break;
            case "爷爷":
              this.setData({ sum: "爸爸或公公" });
              break;
            case "奶奶":
              this.setData({ sum: "妈妈或婆婆" });
              break;
            case "外公":
              this.setData({ sum: "岳父或父亲" });
              break;
            case "外婆":
              this.setData({ sum: "岳母或妈妈" });
              break;
            case "叔伯":
              this.setData({ sum: "哥哥或弟弟或伯(叔)子" });
              break;
            case "姑姑":
              this.setData({ sum: "姐姐或妹妹或姑子" });
              break;
            case "舅舅":
              this.setData({ sum: "哥哥(弟弟)或小舅子" });
              break;
            case "姨妈":
              this.setData({ sum: "姐姐(妹妹)或小姨子" });
              break                
          }     
        if (this.data.a == "老公")
          switch (this.data.b) {
            case "爸爸":
              this.setData({ sum: "公公" });
              break;
            case "妈妈":
              this.setData({ sum: "婆婆" });
              break;
            case "哥哥":
              this.setData({ sum: "大伯子" });
              break;
            case "弟弟":
              this.setData({ sum: "小叔子" });
              break;
            case "姐姐":
              this.setData({ sum: "大姑子" });
              break;
            case "妹妹":
              this.setData({ sum: "小姑子" });
              break;
            case "儿子":
              this.setData({ sum: "儿子" });
              break;
            case "女儿":
              this.setData({ sum: "女儿" });
              break;
            case "老公":
              this.setData({ sum: "估计没有" });
              break;
            case "老婆":
              this.setData({ sum: "就你啊" });
              break;
            case "爷爷":
              this.setData({ sum: "爷爷" });
              break;
            case "奶奶":
              this.setData({ sum: "奶奶" });
              break;
            case "外公":
              this.setData({ sum: "外公" });
              break;
            case "外婆":
              this.setData({ sum: "外婆" });
              break;
            case "叔伯":
              this.setData({ sum: "叔伯" });
              break;
            case "姑姑":
              this.setData({ sum: "姑姑" });
              break;
            case "舅舅":
              this.setData({ sum: "舅舅" });
              break;
            case "姨妈":
              this.setData({ sum: "姨妈" });
              break             
          }     
        if (this.data.a == "老婆")
          switch (this.data.b) {
            case "爸爸":
              this.setData({ sum: "岳父" });
              break;
            case "妈妈":
              this.setData({ sum: "岳母" });
              break;
            case "哥哥":
              this.setData({ sum: "大舅子" });
              break;
            case "弟弟":
              this.setData({ sum: "小舅子" });
              break;
            case "姐姐":
              this.setData({ sum: "大姨子" });
              break;
            case "妹妹":
              this.setData({ sum: "小姨子" });
              break;
            case "儿子":
              this.setData({ sum: "儿子" });
              break;
            case "女儿":
              this.setData({ sum: "女儿" });
              break;
            case "老公":
              this.setData({ sum: "不是你还有谁" });
              break;
            case "老婆":
              this.setData({ sum: "估计没有" });
              break;
            case "爷爷":
              this.setData({ sum: "爷爷" });
              break;
            case "奶奶":
              this.setData({ sum: "奶奶" });
              break;
            case "外公":
              this.setData({ sum: "外公" });
              break;
            case "外婆":
              this.setData({ sum: "外婆" });
              break;
            case "叔伯":
              this.setData({ sum: "叔伯" });
              break;
            case "姑姑":
              this.setData({ sum: "姑姑" });
              break;
            case "舅舅":
              this.setData({ sum: "舅舅" });
              break;
            case "姨妈":
              this.setData({ sum: "姨妈" });
              break  
          }  

        if (this.data.a == "爷爷")
          switch (this.data.b) {
            case "爸爸":
              this.setData({ sum: "曾祖父" });
              break;
            case "妈妈":
              this.setData({ sum: "曾祖母" });
              break;
            case "哥哥":
              this.setData({ sum: "堂爷爷" });
              break;
            case "弟弟":
              this.setData({ sum: "堂爷爷" });
              break;
            case "姐姐":
              this.setData({ sum: "姑奶奶" });
              break;
            case "妹妹":
              this.setData({ sum: "姑奶奶" });
              break;
            case "儿子":
              this.setData({ sum: "爸爸或叔伯" });
              break;
            case "女儿":
              this.setData({ sum: "姑姑" });
              break;
            case "老公":
              this.setData({ sum: "没有" });
              break;
            case "老婆":
              this.setData({ sum: "奶奶" });
              break;
            case "爷爷":
              this.setData({ sum: "高祖父" });
              break;
            case "奶奶":
              this.setData({ sum: "高祖母" });
              break;
            case "外公":
              this.setData({ sum: "外高祖父" });
              break;
            case "外婆":
              this.setData({ sum: "外高祖母" });
              break;
            case "叔伯":
              this.setData({ sum: "曾祖父" });
              break;
            case "姑姑":
              this.setData({ sum: "曾姑奶奶" });
              break;
            case "舅舅":
              this.setData({ sum: "曾舅公" });
              break;
            case "姨妈":
              this.setData({ sum: "曾姨奶奶" });
              break
          }  
        if (this.data.a == "奶奶")
          switch (this.data.b) {
            case "爸爸":
              this.setData({ sum: "外曾祖父" });
              break;
            case "妈妈":
              this.setData({ sum: "外曾祖母" });
              break;
            case "哥哥":
              this.setData({ sum: "舅公" });
              break;
            case "弟弟":
              this.setData({ sum: "舅公" });
              break;
            case "姐姐":
              this.setData({ sum: "姨奶奶" });
              break;
            case "妹妹":
              this.setData({ sum: "姨奶奶" });
              break;
            case "儿子":
              this.setData({ sum: "爸爸或叔伯" });
              break;
            case "女儿":
              this.setData({ sum: "姑姑" });
              break;
            case "老公":
              this.setData({ sum: "爷爷" });
              break;
            case "老婆":
              this.setData({ sum: "没有" });
              break;
            case "爷爷":
              this.setData({ sum: "外高祖父" });
              break;
            case "奶奶":
              this.setData({ sum: "外高祖母" });
              break;
            case "外公":
              this.setData({ sum: "外高祖父" });
              break;
            case "外婆":
              this.setData({ sum: "外高祖母" });
              break;
            case "叔伯":
              this.setData({ sum: "曾祖父" });
              break;
            case "姑姑":
              this.setData({ sum: "曾姑奶奶" });
              break;
            case "舅舅":
              this.setData({ sum: "曾舅公" });
              break;
            case "姨妈":
              this.setData({ sum: "曾姨奶奶" });
              break
          }  
        if (this.data.a == "外公")
          switch (this.data.b) {
            case "爸爸":
              this.setData({ sum: "外曾祖父" });
              break;
            case "妈妈":
              this.setData({ sum: "外曾祖母" });
              break;
            case "哥哥":
              this.setData({ sum: "堂爷爷" });
              break;
            case "弟弟":
              this.setData({ sum: "堂爷爷" });
              break;
            case "姐姐":
              this.setData({ sum: "姑奶奶" });
              break;
            case "妹妹":
              this.setData({ sum: "姑奶奶" });
              break;
            case "儿子":
              this.setData({ sum: "舅舅" });
              break;
            case "女儿":
              this.setData({ sum: "妈妈或姨妈" });
              break;
            case "老公":
              this.setData({ sum: "没有" });
              break;
            case "老婆":
              this.setData({ sum: "外婆" });
              break;
            case "爷爷":
              this.setData({ sum: "外高祖父" });
              break;
            case "奶奶":
              this.setData({ sum: "外高祖母" });
              break;
            case "外公":
              this.setData({ sum: "外高祖父" });
              break;
            case "外婆":
              this.setData({ sum: "外高祖母" });
              break;
            case "叔伯":
              this.setData({ sum: "曾祖父" });
              break;
            case "姑姑":
              this.setData({ sum: "曾姑奶奶" });
              break;
            case "舅舅":
              this.setData({ sum: "曾舅公" });
              break;
            case "姨妈":
              this.setData({ sum: "曾姨奶奶" });
              break
          }  
        if (this.data.a == "外婆")
          switch (this.data.b) {
            case "爸爸":
              this.setData({ sum: "外曾祖父" });
              break;
            case "妈妈":
              this.setData({ sum: "外曾祖母" });
              break;
            case "哥哥":
              this.setData({ sum: "舅公" });
              break;
            case "弟弟":
              this.setData({ sum: "舅公" });
              break;
            case "姐姐":
              this.setData({ sum: "姨奶奶" });
              break;
            case "妹妹":
              this.setData({ sum: "姨奶奶" });
              break;
            case "儿子":
              this.setData({ sum: "舅舅" });
              break;
            case "女儿":
              this.setData({ sum: "妈妈或姨妈" });
              break;
            case "老公":
              this.setData({ sum: "外公" });
              break;
            case "老婆":
              this.setData({ sum: "没有" });
              break;
            case "爷爷":
              this.setData({ sum: "外高祖父" });
              break;
            case "奶奶":
              this.setData({ sum: "外高祖母" });
              break;
            case "外公":
              this.setData({ sum: "外高祖父" });
              break;
            case "外婆":
              this.setData({ sum: "外高祖母" });
              break;
            case "叔伯":
              this.setData({ sum: "曾祖父" });
              break;
            case "姑姑":
              this.setData({ sum: "曾姑奶奶" });
              break;
            case "舅舅":
              this.setData({ sum: "曾舅公" });
              break;
            case "姨妈":
              this.setData({ sum: "曾姨奶奶" });
              break
          }  
        if (this.data.a == "叔伯")
          switch (this.data.b) {
            case "爸爸":
              this.setData({ sum: "爷爷" });
              break;
            case "妈妈":
              this.setData({ sum: "奶奶" });
              break;
            case "哥哥":
              this.setData({ sum: "爸爸或伯伯" });
              break;
            case "弟弟":
              this.setData({ sum: "爸爸或叔叔" });
              break;
            case "姐姐":
              this.setData({ sum: "姑姑" });
              break;
            case "妹妹":
              this.setData({ sum: "姑姑" });
              break;
            case "儿子":
              this.setData({ sum: "堂兄弟" });
              break;
            case "女儿":
              this.setData({ sum: "堂姐妹" });
              break;
            case "老公":
              this.setData({ sum: "你觉得呢" });
              break;
            case "老婆":
              this.setData({ sum: "婶婶" });
              break;
            case "爷爷":
              this.setData({ sum: "曾祖父" });
              break;
            case "奶奶":
              this.setData({ sum: "曾祖母" });
              break;
            case "外公":
              this.setData({ sum: "外高祖父" });
              break;
            case "外婆":
              this.setData({ sum: "外曾祖母" });
              break;
            case "叔伯":
              this.setData({ sum: "堂爷爷" });
              break;
            case "姑姑":
              this.setData({ sum: "姑奶奶" });
              break;
            case "舅舅":
              this.setData({ sum: "舅公" });
              break;
            case "姨妈":
              this.setData({ sum: "姨奶奶" });
              break
          }  
        if (this.data.a == "姑姑")
          switch (this.data.b) {
            case "爸爸":
              this.setData({ sum: "爷爷" });
              break;
            case "妈妈":
              this.setData({ sum: "奶奶" });
              break;
            case "哥哥":
              this.setData({ sum: "叔伯" });
              break;
            case "弟弟":
              this.setData({ sum: "叔伯" });
              break;
            case "姐姐":
              this.setData({ sum: "姑姑" });
              break;
            case "妹妹":
              this.setData({ sum: "姑姑" });
              break;
            case "儿子":
              this.setData({ sum: "表兄弟" });
              break;
            case "女儿":
              this.setData({ sum: "表姐妹" });
              break;
            case "老公":
              this.setData({ sum: "姑父" });
              break;
            case "老婆":
              this.setData({ sum: "没有" });
              break;
            case "爷爷":
              this.setData({ sum: "曾祖父" });
              break;
            case "奶奶":
              this.setData({ sum: "曾祖母" });
              break;
            case "外公":
              this.setData({ sum: "外曾祖父" });
              break;
            case "外婆":
              this.setData({ sum: "外曾祖母" });
              break;
            case "叔伯":
              this.setData({ sum: "堂爷爷" });
              break;
            case "姑姑":
              this.setData({ sum: "姑奶奶" });
              break;
            case "舅舅":
              this.setData({ sum: "舅公" });
              break;
            case "姨妈":
              this.setData({ sum: "姨奶奶" });
              break
          } 
        if (this.data.a == "舅舅")
          switch (this.data.b) {
            case "爸爸":
              this.setData({ sum: "外祖父" });
              break;
            case "妈妈":
              this.setData({ sum: "外祖母" });
              break;
            case "哥哥":
              this.setData({ sum: "舅舅" });
              break;
            case "弟弟":
              this.setData({ sum: "舅舅" });
              break;
            case "姐姐":
              this.setData({ sum: "妈妈或姨妈" });
              break;
            case "妹妹":
              this.setData({ sum: "妈妈或姨妈" });
              break;
            case "儿子":
              this.setData({ sum: "表兄弟" });
              break;
            case "女儿":
              this.setData({ sum: "表姐妹" });
              break;
            case "老公":
              this.setData({ sum: "应该没有" });
              break;
            case "老婆":
              this.setData({ sum: "舅妈" });
              break;
            case "爷爷":
              this.setData({ sum: "外曾祖父" });
              break;
            case "奶奶":
              this.setData({ sum: "外曾祖母" });
              break;
            case "外公":
              this.setData({ sum: "外曾祖父" });
              break;
            case "外婆":
              this.setData({ sum: "外曾祖母" });
              break;
            case "叔伯":
              this.setData({ sum: "外曾祖父" });
              break;
            case "姑姑":
              this.setData({ sum: "曾姑奶奶" });
              break;
            case "舅舅":
              this.setData({ sum: "曾舅公" });
              break;
            case "姨妈":
              this.setData({ sum: "曾姨奶奶" });
              break
          }   
        if (this.data.a == "姨妈")
          switch (this.data.b) {
            case "爸爸":
              this.setData({ sum: "外祖父" });
              break;
            case "妈妈":
              this.setData({ sum: "外祖母" });
              break;
            case "哥哥":
              this.setData({ sum: "舅舅" });
              break;
            case "弟弟":
              this.setData({ sum: "舅舅" });
              break;
            case "姐姐":
              this.setData({ sum: "妈妈或姨妈" });
              break;
            case "妹妹":
              this.setData({ sum: "妈妈或姨妈" });
              break;
            case "儿子":
              this.setData({ sum: "姨兄弟" });
              break;
            case "女儿":
              this.setData({ sum: "姨姐妹" });
              break;
            case "老公":
              this.setData({ sum: "姨父" });
              break;
            case "老婆":
              this.setData({ sum: "没有" });
              break;
            case "爷爷":
              this.setData({ sum: "外曾祖父" });
              break;
            case "奶奶":
              this.setData({ sum: "外曾祖母" });
              break;
            case "外公":
              this.setData({ sum: "外曾祖父" });
              break;
            case "外婆":
              this.setData({ sum: "外曾祖母" });
              break;
            case "叔伯":
              this.setData({ sum: "曾祖父" });
              break;
            case "姑姑":
              this.setData({ sum: "曾姑奶奶" });
              break;
            case "舅舅":
              this.setData({ sum: "曾舅公" });
              break;
            case "姨妈":
              this.setData({ sum: "曾姨奶奶" });
              break
          }  
        this.data.sum = " ";
        this.data.a = " ";
        this.data.b = " ";
        this.data.dot = false;
        this.data.flag = false;
        break;
    }
  }
})
