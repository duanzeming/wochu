<template>
    <div id="home">
        <!-- 头部 -->
        <header>
            <div class="logo"><img src="http://wmall.wochu.cn/h5/home/vueimg/wochuLogo.png"></div>  
            <div class="address"><p>请填写地址</p><span class="sj"></span></div> 
            <div class="search"> <img src="http://wmall.wochu.cn/h5/home/vueimg/search.png" alt=""></div>
        </header>
        <!-- 轮播图 -->
        <div class="img">
            <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/da560f31-eb8a-4367-af52-13149414b275.jpg" alt="">
        </div>
        <!-- 导航 -->
        <div class="top-nav">
            <ul>
                <li><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/251ad45e-998f-4942-abc1-dad68daf11a0.jpg" alt=""></li>
                <li><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/251ad45e-998f-4942-abc1-dad68daf11a0.jpg" alt=""></li>
                <li><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/251ad45e-998f-4942-abc1-dad68daf11a0.jpg" alt=""></li>
                <li><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/251ad45e-998f-4942-abc1-dad68daf11a0.jpg" alt=""></li>
                <li><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/251ad45e-998f-4942-abc1-dad68daf11a0.jpg" alt=""></li>
                <li><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/251ad45e-998f-4942-abc1-dad68daf11a0.jpg" alt=""></li>
                <li><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/251ad45e-998f-4942-abc1-dad68daf11a0.jpg" alt=""></li>
                <li><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/251ad45e-998f-4942-abc1-dad68daf11a0.jpg" alt=""></li>
            </ul>
        </div>
        <!-- 限量抢购 -->
        <div class="goods-item clearfixed">
            <div class="new">
                <div class="left-view">
                    <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/64f0efe2-d8b3-475c-ba52-e6b6c70324a8.jpg" alt="">
                </div>
                <div class="right-view">
                    <div class="top"></div>
                    <div class="bottom"></div>
                </div>
            </div>
        </div>
        <div class="test clearfixed">wwwwww</div>
    </div>
</template>
    
<script>
export default {
    name: "home",
    data () {
        return {
            
        }
    }
}
</script>
    
<style lang="css" scoped>
.test{
    width:100%;
    height: 0.5rem;
    background:#ccc;
}
#home{
    width:100%;
    padding:.45rem 0 .5rem 0;
}
/* 头部 */
    header{
        position:fixed;
        width:100%;
        height: 0.45rem;
        line-height:0.45rem;
        background:#fff;
        padding:0 .12rem;
        z-index:3;
        left: 0;
        top:0;
    }
    header .logo{
        float:left;
        margin-right:.15rem;
    }
    header .logo img{
        width:0.44rem;
        height: 0.2rem;
        margin-top:0.125rem;
    }
    .address{
        width:1.00rem;
        float: left;
        font-size:.15rem;
        color:#1f6117;
        text-align:center;
        position:relative;
    }
    .address .sj{
        display:inline-block;
        border:0.04rem solid  transparent;
        border-top:0.04rem #1f6117 solid;
        position:absolute;
        left: 1.05rem;
        top:.2rem;
    }
    .search{
        width:.4rem;
        float:right;
        text-align:center;
    }
    .search img{
        width:.21rem;
        height:auto;
        margin-top:.12rem;
    }
    /* 轮播图 */
    .img img{
        width:3.75rem;
        height:1.66rem
    }
    /* 导航 */
    .top-nav ul{
        display:flex;
        flex-wrap:wrap;
        padding:.07rem 0 .1rem .07rem;
    }
    .top-nav li{
        flex:1;
    }
    .top-nav ul img{
        width:.85rem;
        height:.85rem;
    }
    /* 限量抢购 */
    .new{
        padding:.15rem .1rem 0 .1rem;
        background:#f4f4f4;
    }
    .left-view{
        float:left;
        width:1.75rem;
        height:2.6rem;
    }
    .left-view img{
        width:100%;
        height:100%;
    }
    .right-view{
        float:right;
    }

</style>