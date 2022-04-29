// 模拟从服务器获取的数据
const data=[
  {id:1,title:'小米手机',price:300,src:'https://www.mescroll.com/demo/res/img/pd1.jpg'},
  {id:2,title:'戴尔电脑',price:100,src:'https://www.mescroll.com/demo/res/img/pd1.jpg'},
  {id:3,title:'联想电脑',price:200,src:'https://www.mescroll.com/demo/res/img/pd1.jpg'},
]
export default {
  getGoodsList(callback){
    // 100毫秒是模拟网络延迟
    setTimeout(()=>callback(data),100)
  }
}

