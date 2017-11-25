<template>
    <div class="footer">
        <ul>
            <router-link to="/home">
                <li>
                    <img src="../assets/img/index_n.png" alt="">
                    <p>首页</p>
                </li>
            </router-link>
            <router-link to="/classify">
                <li>
                    <img src="../assets/img/shopping_r.png" alt="">
                    <p>分类</p>
                </li>
            </router-link>
            <router-link to="/cart">
                <li>
                    <img src="../assets/img/cart_n.png" alt="">
                    <p>购物车</p>
                </li>
            </router-link>
            <router-link to="/mine">
                <li>
                    <img src="../assets/img/my_n.png" alt="">
                    <p>我的</p>
                </li>
            </router-link>
        </ul>
    </div>
</template>
    
<script>
export default {
    name: "Tabbur",
    data () {
        return {
            
        }
    }
}
</script>
    
<style lang="css" scoped>
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  height: .5rem;
  width: 100%;
  border-top: 1px solid red;
}
.footer img{
  width: .29rem;
  height: .29rem;
  overflow: hidden;
  outline: none;
}
.footer li{
  float: left;
  width: 25%;
  text-align: center;
}
</style>