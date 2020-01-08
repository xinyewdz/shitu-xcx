//index.js
//获取应用实例
const app = getApp()
var audioContext;

Page({
  data: {
    imgPath: null,
    audioPath:null
  },
  onLoad: function(){
    this.getNext();
  },
  play: function(){
    if(audioContext!=undefined){
      audioContext.stop();
    }
    audioContext = wx.createInnerAudioContext();
    audioContext.src = this.data.audioPath;
    audioContext.play()
  },
  next: function(data){
    this.setData({
      "imgPath": data.ImgPath,
      "audioPath": data.AudioPath
      });

  },
  getNext:function(){
    var that = this;
    wx.request({
      url: 'https://mp.wenqiuqiu.com/next',
      success(res) {

        that.next(res.data);
      }
    })
  }
 
})

