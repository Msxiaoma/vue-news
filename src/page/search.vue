<template>
    <div class="search-page">
        <div class="toolbar">
            <span class="backbtn" @click="back"></span>
            <span class="search-title">搜索</span>
        </div>
        <div class="search-content">
            <span class="search-chooser"></span>
            <input type="search" class="search-input" placeholder="请输入搜索关键词" @keyup.enter="searchNews" v-model="searchValue"/>
        </div>
        <ul class="search-tip" v-if="showTip">
            <li v-for="(item,index) in searchData" :key="index">{{item}}</li>
        </ul>
        <div class="search-list" v-else>
            <news-list :list="searchResult" :searchKey="searchValue"></news-list>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import newsList from '../components/news_list'
    export default {
        data() {
            return {
                showTip: true,
                searchResult: [],
                searchValue: '',
                searchData: ['女主播调侃大屠杀', '中国队收获14金', '互金公布网贷情况', 'iPhone双卡双待', '伦敦回应空调车', '28省GDP排行榜', '拼多多发布声明', '碧桂园股债双杀', '阚清子承认分手', '三鹿董事长获减刑']
            }
        },
        components: {
            newsList
        },
        methods: {
            back() {
                this.$router.back()
            },
            searchNews() {
                if(this.searchValue !== '') {
                    axios.post('/api/search',{
                    value: this.searchValue
                    }).then(res => {
                        if(res.data.stat === 'OK') {
                            this.showTip = false
                            this.searchResult = res.data.result
                        }
                    })
                } else {
                    this.showTip = true
                }
            }
        }
    }
</script>

<style>
    .search-list {
        position: relative;
        padding: 0rem .3rem;
        overflow-y: scroll;
        font-size: .34rem;
    }
    .search-page {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #fff;
    }
    
    .toolbar {
        height: 1rem;
        position: relative;
        width: 100%;
        color: #fff;
        font-size: .31rem;
        line-height: 1rem;
        background-color: #d43d3d;
        text-align: center;
    }
    
    .backbtn {
        float: left;
        margin-top: .18rem;
        margin-left: .2rem;
        width: .46rem;
        height: .6rem;
        background: url('../assets/img/back.png') no-repeat 50%;
        background-size: 100%;
        /* display: inline-block; */
    }
    
    .search-title {
        font-size: .44rem;
        margin-left: -.4rem;
        font-weight: 700;
    }
    
    .search-content {
        padding: .1rem;
        font-size: .31rem;
        background: #c9c9c9;
    }
    
    .search-input {
        padding: .1rem .2rem .1rem .8rem;
        width: 7.3rem;
        border-radius: .1rem;
        outline: 0;
        border: 0;
        font-size: .31rem;
        -webkit-appearance: none;
    }
    
    .search-chooser {
        display: inline-block;
        width: .8rem;
        height: .54rem;
        position: absolute;
        background: url(http://s3.pstatp.com/image/toutiao_mobile/search_icons.png?ver=201408311655) #fff no-repeat 5px 2px;
        background-size: .4rem;
        background-position: 5px -35px;
    }
    
    .search-tip {
        text-align: center;
        font-size: .3rem;
    }
    
    .search-tip li {
        display: inline-block;
        background: #f5f5f5;
        padding: .1rem;
        color: #363636;
        margin: .3rem .1rem 0;
    }
</style>
