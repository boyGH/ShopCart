// 该页面是获取商品列表的接口
import shop from '../../api/shop'
const state = {
  //【1】定义一个list数组来保存商品列表的数据
  list:[]
}
const getters = {}

// 获取商品列表数据
const actions = {
  //【2】从api获取假数据,商品列表数据
  getList( { commit } ){
    shop.getGoodsList(data=>{
      commit('setList',data)
    })
  }
}
const mutations = {
  // 【3】将获取到的商品列表数据放入list中
  setList(state,data){
    state.list = data
  }
}

export default {
  state,
  namespaced:true,
  getters,
  actions,
  mutations
}