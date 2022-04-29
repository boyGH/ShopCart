<template>
  <div>
    <div class="content">
      <router-view/>
    </div>
    <div class="bottom">
      <router-link to="/" tag="div">商品列表</router-link>
      <router-link to="/shopcart" tag="div">购物车
      <!-- 显示购物车中的商品数量 -->
        <span class="badge">{{num}}</span></router-link>
    </div>
  </div>
</template>

<script>
import {mapState } from 'vuex'
export default {
computed:{
  // 使用扩展运算符“...”，将mapState和mapGetters返回的结果放到计算属性中
  ...mapState({
    // 绑定购物车中的商品
    items:state=>state.shopcart.items,
    // 绑定购物车中的商品数量
    num:state=>state.shopcart.items.length
  })
},

}
</script>
<style>
  html,body{
    height: 100%;
  }
  body{
    margin: 0;
    font-size: 12px;
    box-sizing: border-box;
  }
</style>

<style scoped>
  #app{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .content{
    flex: 1;
    overflow-y:scroll;
  }
  .bottom{
    height: 40px;
    display: flex;
    border: 1px solid #ccc;
  }
  .bottom>div{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #444;
  }
  .bottom>div:not(:last-child){
    border-right: 1px solid #ccc;
  }
  .bottom>div.router-link-exact-active{
    color: #ff6700;
    font-weight: bold;
    background: #5d9cee;
  }
  .badge{
    display: inline-block;
    width: 16px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    border-radius: 50%;
    background: #ff5500;
    color: #fff;
    font-size: 12px;
    }
</style>