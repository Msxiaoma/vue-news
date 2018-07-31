<template>
    <div class="news-list">
        <!-- 只有文字 -->
        <div class="news-section">
            <h3 class="news-title">中国习观｜未来十年，金砖合作将面临什么？习近平这样说</h3>
            <div class="news-info">
                <span class="news-label">置顶</span>
                <span class="news-common">中国网</span>
                <span class="news-common">评论 49</span>
                <span class="news-common">44 分钟前</span>
            </div>
        </div>
         <!-- 右侧有图片 -->
        <div class="news-section">
            <div class="news-info-left">
                <h3 class="news-title">新进展！北京首批积分落户初核结果今起可查询！</h3>
                <div class="news-info">
                    <span class="news-label">热</span>
                    <span class="news-common">北京日报</span>
                    <span class="news-common">评论 46</span>
                    <!-- <span class="news-common">44 分钟前</span> -->
                </div>
            </div>
            <div class="news-img-right">
                <img src="https://p3.pstatp.com/list/pgc-image/1532990701079236bdfcce4" class="news-img">
            </div>
        </div>
         <!-- 三张图片 -->
        <div class="news-section">
            <h3 class="news-title">新进展！北京首批积分落户初核结果今起可查询！</h3>
            <ul class="news-img-list">
                <li class="list-img-holder"><img src="https://p3.pstatp.com/list/pgc-image/1532990533258be89a710f1"></li>
                <li class="list-img-holder"><img src="https://p3.pstatp.com/list/pgc-image/1532990533071b8ea66b8d9"></li>
                <li class="list-img-holder"><img src="https://p3.pstatp.com/list/pgc-image/153299053305349195a3480"></li>
            </ul>
            <div class="news-info">
                <!-- <span class="news-label">热</span> -->
                <span class="news-common">北京晨报</span>
                <span class="news-common">评论 4336</span>
                <span class="news-common">21 分钟前</span>
            </div>
        </div>
         <!-- 一张大图 -->
        <div class="news-section">
            <h3 class="news-title">皇后镇令人惊艳的酒店，你会选哪家？</h3>
           <div class="news-large-img">
                <img src="http://sf3-ttcdn-tos.pstatp.com/img/web.business.image/201805315d0d66cf34fe705d4cf2a71a~640x0.image" onerror="errorimg.call(this)" onload="loadimg.call(this)">
          </div>
            <div class="news-info">
                <span class="news-label-gg">广告</span>
                <span class="news-common">TripAdvisor猫途鹰</span>
                <span class="news-common">评论 0</span>
                <span class="news-common">23 分钟前</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            newsType: Number
        },
        computed: {
            getList() {
                console.log(this.newsType)
                let list = ' ds'
                return list
            }
        },
        created() {
            console.log(this.newsType)
        }
    }
</script>

<style>
    .news-list {
        position: relative;
        top: 1.6rem;
        padding: 0rem .3rem;
        overflow-y: scroll;
        font-size: .34rem;
    }
    
    .news-section {
        padding: .32rem 0;
        border-bottom: 1px solid rgba(221, 221, 221, 0.6);
    }
    
    .news-title {
        font-size: .34rem;
        color: #333;
        font-weight: normal;
    }
    
    .news-info {
        margin-top: .12rem;
        color: #999;
        font-size: .18rem;
    }
    
    .news-label {
        color: #f85959;
        text-align: center;
        border: .01rem solid rgba(248, 89, 89, 0.5);
        border-radius: .04rem;
        padding: 0rem .04rem;
        margin-right: .1rem;
    }
    .news-label-gg{
        color: #2a90d7;
        text-align: center;
        border: .01rem solid rgba(42, 144, 215, 0.5);
        border-radius: .04rem;
        margin-right: .1rem;
        padding: 0rem .04rem;
    }
    .news-common {
        margin-right: .1rem;
        color: #999;
    }
    
    .news-info-left {
        width: 4.26rem;
        position: relative;
        display: inline-block;
    }
    
    .news-img-right {
        position: relative;
        display: inline-block;
    }
    
    .news-img {
        width: 2.5rem;
        height: 1.47rem;
    }
    .news-img-list{
        font-size:0;
        list-style: none;
    }
    .list-img-holder{
        display: inline-block;
        padding-right: .04rem;
    }
    .list-img-holder img {
         width: 2.25rem;
        height: 1.47rem;
    }
    .news-large-img{
        margin-top: .12rem;
        overflow: hidden;
        width: 100%;
        position: relative;
        height: 3.75rem;
    }
    .news-large-img img{
        width: 6.9rem;
        height: 3.88rem;
    }
</style>


