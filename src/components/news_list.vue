<template>
    <div class="list-components">
        <div v-for="(item,index) in newslist" :key="index">
            <div class="news-section" v-if="item.showType === 0" @click="checkArticle(item.href)">
                    <h3 class="news-title" v-html="item.title"></h3>
                    <div class="news-info">
                        <span class="news-label" v-if="item.sign !== ''">{{item.sign}}</span>
                        <span class="news-common">{{item.source}}</span>
                        <span class="news-common">评论 {{item.comment}}</span>
                        <span class="news-common" v-if="item.time !== 0">{{item.time}} 分钟前</span>
                    </div>
            </div>
    
            <!-- 右侧有图片 -->
            <div class="news-section" v-if="item.showType === 1" @click="checkArticle(item.href)">
                    <div class="news-info-left">
                        <h3 class="news-title" v-html="item.title"></h3>
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
            <div class="news-section" v-if="item.showType === 2"  @click="checkArticle(item.href)">
                    <h3 class="news-title" v-html="item.title"></h3>
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
            <div class="news-section" v-if="item.showType === 3" @click="checkArticle(item.href)">
                    <h3 class="news-title" v-html="item.title"></h3>
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
        <p class="loading-more" v-if="showLoading">加载中...</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // showLoading: false
            }
        },
        props: {
            list: Array,
            searchKey: String,
            showLoading: Boolean
        },
        computed: {
            newslist() {
                if (this.searchKey !== '') {
                    this.list.forEach(item => {
                        item.title = item.title.replace(this.searchKey, `<span style=\"color: red;font-weight: 500;\">${this.searchKey}</span>`)
                    })
                    return this.list
                } else {
                    return this.list
                }
            }
        },
        methods: {
            checkArticle(url) {
                window.location.href = url
            }
        }
    }
</script>

<style>
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
    
    .news-label-gg {
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
    
    .news-img-list {
        font-size: 0;
        list-style: none;
    }
    
    .list-img-holder {
        display: inline-block;
        padding-right: .04rem;
    }
    
    .list-img-holder img {
        width: 2.25rem;
        height: 1.47rem;
    }
    
    .news-large-img {
        margin-top: .12rem;
        overflow: hidden;
        width: 100%;
        position: relative;
        height: 3.75rem;
    }
    
    .news-large-img img {
        width: 6.9rem;
        height: 3.88rem;
    }
    
    .loading-more {
        text-align: center;
        color: #999;
        font-size: .26rem;
        padding: .4rem;
    }
</style>


