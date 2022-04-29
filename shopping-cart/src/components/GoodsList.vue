<template>
  <div class="list">
    <!-- 对goodslist进行遍历 -->
    <div class="item" v-for="goods in goodslist" :key="goods.id">
      <div class="item-1">
        <img :src="goods.src" alt="" class="item-img">
      </div>
      <div class="item-r">
        <div class="item_title">{{goods.title}}</div>
        <!-- 在输出时调用了currency过滤器 -->
        <div class="item_price">{{goods.price|currency}}</div>
        <div class="item_opt">
          <!-- 点击之后，会将所点击的那个商品的goods传到add()方法中 -->
          <button @click="add(goods)">加入购物车</button>
        </div>
      </div>           
    </div>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
 computed:mapState({
  //  将state中的商品列表数据作为goodslist的属性
  goodslist:state=>state.goods.list   
 }),
 methods:mapActions('shopcart',['add']),
//  在组件创建完成后，将商品列表数据从goods.js中读取出来，并保存到state中
 created(){
   this.$store.dispatch('goods/getList')
 },
 filters:{
  //  过滤器，将数字转换为人民币（￥+数字）
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
  float: right;
  font-size: 0;
}
.item-r .item_title{
  font-size: 14px;
  color: #333;
}
.item-r .item_price{
  font-size: 14px;
  color: #f60;
}
.item-r .item_opt{
  font-size: 14px;
  color: #999;
}
.item-r .item_opt{
  margin-top: 10px;}
.item-opt button{
  border: 0;
  background: coral;
  color: #fff;
  padding: 5px 10px;
  cursor: pointer;
}
.item-img{
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
}
</style>