<template>
    <div class="news-list">
        <!-- 只有文字 -->
        <news-list :list="list" :searchKey="searchKey" :showLoading="showLoading"></news-list>
    </div>
</template>

<script>
    import axios from 'axios'
    import newsList from '../components/news_list'
    export default {
        props: {
            newsType: Number
        },
        components: {
            newsList
        },
        data() {
            return {
                currentId: 0, // 当前选项卡的 ID
                pageId: 1,
                showLoading: false,
                searchKey: '',
                list: []
            }
        },
        mounted() {
            this.pageId = 1
            this.getNewLsit(0)
            window.addEventListener('scroll', this.handleScroll, true)
        },
        watch:{
            newsType(newVal,oldVal){
                this.getNewLsit(newVal)
            }   
        },
        methods: {
            handleScroll(e) {
                var seeHeight = document.documentElement.clientHeight // 内容可视区域的高度
                var scrollTop = document.documentElement.scrollTop // 滚动条距离顶部的距离。
                var scrollHeight = document.body.scrollHeight    // 内容可视区域的高度加上溢出（滚动）的距离
                if(seeHeight + scrollTop === scrollHeight) {
                    if(this.pageId<2) {     // 2 为总页数
                        this.showLoading = true
                        this.pageId++
                        this.getNewLsit(this.currentId)
                        
                    }
                }
            },
            getNewLsit(value) {
                axios.post('/api/getvedio',{
                    id: value,
                    pageId: this.pageId
                }).then(res => {
                    if(this.showLoading === true) {
                        this.list = this.list.concat(res.data)
                        this.showLoading = false
                    } else {
                        this.list = res.data
                    }
                    this.currentId = value
                    
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
</style>


