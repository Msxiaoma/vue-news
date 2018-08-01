<template>
    <div class="news-list">
        <!-- 只有文字 -->
        <div v-for="(item,index) in list" :key="index">
        <div class="news-section" v-if="item.showType === 0">
            <h3 class="news-title">{{item.title}}</h3>
            <div class="news-info">
                 <span class="news-label" v-if="item.sign !== ''">{{item.sign}}</span>
                <span class="news-common">{{item.source}}</span>
                <span class="news-common">评论 {{item.comment}}</span>
                <span class="news-common" v-if="item.time !== 0">{{item.time}} 分钟前</span>
            </div>
        </div>
         <!-- 右侧有图片 -->
        <div class="news-section" v-if="item.showType === 1">
            <div class="news-info-left">
                <h3 class="news-title">{{item.title}}</h3>
                <div class="news-info">
                     <span class="news-label" v-if="item.sign !== ''">{{item.sign}}</span>
                    <span class="news-common">{{item.source}}</span>
                    <span class="news-common">评论 {{item.comment}}</span>
                    <span class="news-common" v-if="item.time !== 0">{{item.time}} 分钟前</span>
                </div>
            </div>
            <div class="news-img-right">
                <img :src="item.imgUrl" class="news-img">
            </div>
        </div>
         <!-- 三张图片 -->
        <div class="news-section" v-if="item.showType === 2">
            <h3 class="news-title">{{item.title}}</h3>
            <ul class="news-img-list">
                <li class="list-img-holder" v-for="url in item.imgArr" :key="url"><img :src="url"></li>
            </ul>
            <div class="news-info">
                <span class="news-label" v-if="item.sign !== ''">{{item.sign}}</span>
                <span class="news-common">{{item.source}}</span>
                <span class="news-common">评论 {{item.comment}}</span>
                <span class="news-common" v-if="item.time !== 0">{{item.time}} 分钟前</span>
            </div>
        </div>
         <!-- 一张大图 -->
        <div class="news-section" v-if="item.showType === 3">
            <h3 class="news-title">{{item.title}}</h3>
           <div class="news-large-img">
                <img :src="item.bigImgUrl">
          </div>
            <div class="news-info">
                <span class="news-label-gg" v-if="item.sign !== ''">{{item.sign}}</span>
                <span class="news-common">{{item.source}}</span>
                <span class="news-common">评论 {{item.comment}}</span>
                <span class="news-common" v-if="item.time !== 0">{{item.time}} 分钟前</span>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        props: {
            newsType: Number
        },
        data() {
            return {
                list: [{
                    title: '中国习观｜未来十年，金砖合作将面临什么？习近平这样说',
                    sign: '置顶',
                    source: '中国网',
                    comment: 49,
                    time: 44,
                    showType: 0
                },{
                    title: '新进展！北京首批积分落户初核结果今起可查询！',
                    sign: '热',
                    source: '北京日报',
                    comment: 46,
                    time: 0,
                    imgUrl: 'https://p3.pstatp.com/list/pgc-image/1532990701079236bdfcce4',
                    showType: 1
                },{
                    title: '新进展！北京首批积分落户初核结果今起可查询！',
                    sign: '',
                    source: '北京晨报',
                    imgArr:['https://p3.pstatp.com/list/pgc-image/1532990533258be89a710f1','https://p3.pstatp.com/list/pgc-image/1532990533071b8ea66b8d9','https://p3.pstatp.com/list/pgc-image/153299053305349195a3480'],
                    comment: 4336,
                    time: 21,
                    showType: 2
                },{
                    title: '皇后镇令人惊艳的酒店，你会选哪家？',
                    sign: '广告',
                    bigImgUrl: 'http://sf3-ttcdn-tos.pstatp.com/img/web.business.image/201805315d0d66cf34fe705d4cf2a71a~640x0.image',
                    source: 'TripAdvisor猫途鹰',
                    comment: 0,
                    time: 0,
                    showType: 3
                }]
            }
        },
        watch:{
            newsType(newVal,oldVal){
                axios.post('/api/getvedio',{
                    id: this.newsType
                }).then(res => {
                    this.list = res.data
                })
            }
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


