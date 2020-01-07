//index.js
//获取应用实例
const app = getApp()

Page({
  play: function(){
    var audioContext = wx.createInnerAudioContext();
    audioContext.src="/sounds/消防车声音.mp3";
    audioContext.play()
    console.log("play audio")
  }
 
})
