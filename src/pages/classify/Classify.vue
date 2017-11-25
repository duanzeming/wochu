<template>
    <div>
        <!-- 顶部搜索栏目 -->
        <header class="top">
            <img src="../../assets/img/icon-search-40@2x.png" alt="">
            <div class="search-key">
                支持首字母缩写
            </div>
        </header>
        <!-- 分割线 -->
        <div class="fengexian"></div>
        <!-- Nav左侧导航 -->
        <nav class="wrapper-nav">
            <ul>
                <li v-for="(item,index) in navList" :key="item.id"><p>{{ item }}</p></li>
            </ul>
        </nav>
        <!-- 列表右侧 -->
        <div class="shet">
        <section class="bg">
            <!-- 右表格上方 -->
            <div class="center__right_top clearfixed">
                <div class="float_wrap">
                    <span class="fl"></span>
                    <p class="lable">我厨精选</p>
                    <span class="fr"></span>
                </div>
            </div>
            <ul>
                <li v-for="(item, index) in imgList" :key="item.id"><img :src="item.img" alt=""><p>{{ item.pName }}</p></li>
            </ul>
            <!-- 分割线 -->
            <div class="fengexianone"></div>
        </section>
        <!-- 列表右侧 -->
        <section class="bg">
            <!-- 右表格上方 -->
            <div class="center__right_top clearfixed">
                <div class="float_wrap">
                    <span class="fl"></span>
                    <p class="lable">我厨精选</p>
                    <span class="fr"></span>
                </div>
            </div>
            <ul>
                <li v-for="(item, index) in imgList" :key="item.id"><img :src="item.img" alt=""><p>{{ item.pName }}</p></li>
            </ul>
            <!-- 分割线 -->
            <div class="fengexianone"></div>
        </section>
        </div>
    </div>
</template>
    
<script>
export default {
    name: "home",
    data () {
        return {
            navList: [ "推荐","我厨优选","餐馆名菜","全部净菜","儿童专区","蔬菜","水果","肉禽蛋","水厂海鲜","乳饮西点","点心速食","粮油副食"],
            imgList: [
               {img: "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7d78dba5-d085-48e4-a5f7-d60afae06ac4.jpg", pName: "全网抄底" } ,
               {img: "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/cbaac631-3737-4629-b7ad-ddb5141c10b9.jpg", pName: "时令蔬果专区"} ,
               {img: "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3639cb36-2c9e-4c6c-b63f-010c31420325.jpg", pName: "限时特惠"} ,
               {img: "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4b7934db-f9df-41b8-a569-05ee3f3266a3.jpg", pName: "新鲜乳品"} ,
               {img: "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ec6cf8f8-ea6a-4e8c-8f53-8ab6a9e4175b.jpg", pName: "生猛海鲜"} ,
               {img: "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/571d2d10-65b1-4f21-899a-59b44266f8f7.jpg", pName: "冷鲜肉禽"}
            ]
        }
    }
}
</script>
    
<style lang="css" scoped>
/* 顶部搜索栏目 */
.top{
    height: .34rem;
    margin: .06rem .12rem;
    border-radius: .06rem;
    padding: 0 .06rem;
    border: .01rem solid #ccc;
    overflow: hidden;
}
.top img{
    width: .2rem;
    height: .2rem;
    float: left;
    margin: .07rem;
}
.search-key{
    height: .31rem;
    padding: 0;
    font-size: .14rem;
    line-height: .31rem;
    color: #ccc;
    border: 0;
}
/* 分割线 */
.fengexian{
    height: .11rem;
    background: #f4f5f7;
    width: 100%;
}
.fengexianone{
    background: #f4f5f7;
    height: .11rem;
    width: 100%;
    clear: both;
}
/* Nav左侧导航 */
.wrapper-nav{
    width: .9rem;
    float: left;
    height: 5.58rem;
    left: 0;
    color: #666;
    font-size: .15rem;
    overflow: scroll;
    background: #fff;
}
.wrapper-nav ul{
    width: 100%;
    height: auto;
    /* overflow-y: hidden; */
}
.wrapper-nav::-webkit-scrollbar{
  display: none;
}
nav ul li {
    width: 100%;
    height: .5rem;
    padding: .13rem 0;
    line-height: .3rem;
    text-align: center;
    font-size: .14rem;
}
nav ul li:first-child{
    color: #6eb042;
}
nav ul li:first-child p{
    border-left: .03rem solid #6eb042;
}
/* 右表格上方 */
.shet {
    width: 2.85rem;
    float: right;
    overflow: hidden;
    height: 5.58rem;
    border-left: .01rem solid #e5e5e5;
    background: #fff;
    overflow: scroll;
}
.shet::-webkit-scrollbar{
  display: none;
}
.bg{
    width: 2.85rem;
    height: 2.86rem;
    float: right;
    overflow: hidden;
    border-left: .01rem solid #e5e5e5;
    background: #fff;
}
.center__right_top{
    width: 100%;
    height: .45rem;
    background: #fff;
    text-align: center;
    overflow: hidden;
}
.float_wrap{
    display: inline-block;
    height: 100%;
    margin-top: -.31rem;
}
.float_wrap .fl {
    float: left;
    margin-right: .1rem;
}
.float_wrap .lable {
    float: left;
    display: block;
    height: .45rem;
    color: #011e00;
    font-size: .14rem;
    line-height: 1.1rem;
    text-align: center;
    font-weight: 550;
}
.float_wrap .fr {
    float: left;
    margin-left: .1rem;
}
.float_wrap span {
    display: block;
    height: .26rem;
    width: .25rem;
    border-bottom: .01rem solid #e5e5e5;
}
.bg ul li img{
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
}
.bg ul {
    width: 100%;
    padding: .1rem .01rem 0 .11rem;
    background: #fff;
}
.bg ul li {
    width: .79rem;
    margin-right: .11rem;
    height: 1.1rem;
    text-align: center;
    float: left;
}
.bg ul li p {
    width: .5rem;
    height: .43rem;
    font-size: .12rem;
    color: #666;
    line-height: .16rem;
    padding-top: .1rem;
    margin-left: .16rem;
    overflow: hidden;
}
</style>