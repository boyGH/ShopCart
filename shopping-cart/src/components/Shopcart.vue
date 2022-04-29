<template>
  <div class="list"> 
    <div class="item" v-for="item in items" :key="item.id">
       <div class="item-1">
        <img :src="item.src" alt="" class="item-img">
      </div>
      <div class="item-r">
        <div class="item_title">
          {{item.title}}
          <!-- 商品数量加1或者减少1 -->
          <button @click="additem(item)">+</button>
          <input v-model="item.num" maxlength="2"  style="width: 18px"/>
          <button @click="reduceitem(item)">-</button>
        </div>
        <div class="item_price">
          {{item.price|currency}}</div>
        <div class="item_opt">
          <button @click="del(item.id)">删除</button>
        </div>
      </div>          
    </div>
      <div class="item-total" v-if="items.length">商品总价：{{total|currency}}</div>
        <div class="item-empty" v-else>购物车中暂无商品</div>
  </div>
</template>

<script>
import { mapGetters,mapState,mapActions } from 'vuex'
export default {
computed:{
  // 使用扩展运算符“...”，将mapState和mapGetters返回的结果放到计算属性中
  ...mapState({
    // 绑定购物车中的商品
    items:state=>state.shopcart.items
  }),
  // 绑定购物车中的商品总价
  ...mapGetters('shopcart',{total:'totalPrice'})
},
methods:mapActions('shopcart',['del','additem','reduceitem']),
filters:{
  currency(value){
    return '￥'+value
  }
},
}

</script>

<style>
.item{
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}
.item::after{
  content: '';
  display: block;
  clear: both;
}
.item-1{
  float: left;
  font-size: 0;
}
.item-r{
  float:left;
  padding-left: 200px;
}
.item-img{
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
}
.item_title{
  font-size: 14px;
  margin-top: 10px;
  color: #333;
}
.item_price{
  font-size: 14px;
  color: #f60;
  margin-top: 10px;
}
.item-opt{
  margin-top: 10px;
}
.item-opt button{
  width: 50px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  font-size: 14px;
  margin-right: 10px;
}
.item-total{
  font-size: 14px;
  color: #f60;
  margin-top: 10px;
}
.item-empty{
  font-size: 14px;
  color: #f60;
  margin-top: 10px;
  text-align: center;
}
</style> 