const state ={
  // 用来保存购物车中商品的数据
  items:[]
}

const getters ={
  totalPrice:(state)=>{
    return state.items.reduce((total,item)=>{
      return total+item.price*item.num
    },0).toFixed(2)
  }
}
const actions ={
  // item表示新添加的商品
  add(context,item){
    context.commit('add',item)
  },
  // id表示要删除的商品的id
  del(context,id){
    context.commit('del',id)
  },
  reduceitem(context,item){
    context.commit('reduceitem',item)
  },
  additem(context,item){
    context.commit('additem',item)
  }
}
const mutations ={
  // item表示新添加的那个商品
  add(state,item){
    // 在添加商品时，判断购物车中是否已经存在该商品，即判断购物车中是否已经存在该商品的id
    const v = state.items.find(v=>v.id===item.id)
    if(v){
      // 如果存在，则将该商品的数量加1
      ++v.num
    }
    else{
      // 如果不存在，则将该商品添加到购物车中，即将该商品的相关信息push到items数组中
      state.items.push({
      id:item.id,
      title:item.title,
      price:item.price,
      src:item.src,
      num:1,
    })
  }
    },
    del(state,id){
      state.items.forEach((item,index,arr)=>{
        if(item.id === id){
          // 从index索引开始，删除1个元素，拼接剩下的元素，返回新的数组
         arr.splice(index,1)
        }
      })
  },
  reduceitem(state,_item){
    state.items.forEach((item,index,arr)=>{
        // 如果数量大于1，则减1
        if(item.num>1){
          item.num--
        }
        // 如果数量等于1，则删除该商品
        else{
          arr.splice(index,1)
        }
    })
  },
  additem(state,_item){
    state.items.forEach((item,index,arr)=>{
        item.num++
    })
  }
}


export default {
  namespaced:true,
  state,
  getters,
  actions,
  mutations
}

