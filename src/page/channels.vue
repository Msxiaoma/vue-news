<template>
    <div class="channels">
        <div class="toolbar">
            <span class="backbtn" @click="back"></span>
            <span class="toolbar-title">频道管理</span>
        </div>
        <div class="remove-channels">
            <p class="remove-title">点击删除以下频道</p>
            <ul class="remove-channels-list">
                <li class="channels-list-item" v-for="(item, index) in removeArr" :key="index" @click="removeNews(index, item)" :class="{'current-channels': newIndex === index}">
                    {{item.title}}
                </li>
            </ul>
        </div>
        <div class="remove-channels">
            <p class="remove-title" v-if="showInfo">点击添加以下频道</p>
            <p class="remove-title mark" v-else>最多16个频道，请先删除一些</p>
            <ul class="remove-channels-list">
                <li class="channels-list-item" v-for="(item, index) in addArr" :key="index" @click="addNews(index, item)">
                    {{item.title}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                showInfo: true,
                newIndex: 0,
                removeArr: [],
                addArr: []
            }
        },
        mounted() {
            this.removeArr = this.getRemoveArr
            this.addArr = this.getAddArr
        },
        computed: {
             ...mapGetters(['getRemoveArr', 'getAddArr'])
        },
        methods: {
             ...mapMutations(['setRemoveArr', 'setAddArr']),
            removeNews(index, item) {
                if (this.removeArr.length > 1 && index !== 0) {
                    this.removeArr.splice(index, 1)
                    this.addArr.push(item)
                }
            },
            addNews(index, item) {
                if (this.removeArr.length < 16) {
                    this.addArr.splice(index, 1)
                    this.removeArr.push(item)
                } else {
                    this.showInfo = false
                }
            },
            back() {
                this.setRemoveArr(this.removeArr)
                this.setAddArr(this.addArr)
                this.$router.back()
            }
        }
    }
</script>

<style>
    .channels{
        position: absolute;
        width: 100%;
        height: 100%;
        background: #f8f8f8;
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
    
    .toolbar-title {
        margin-left: -.2rem;
    }
    
    .remove-channels {
        font-size: .2rem;
    }
    
    .remove-title {
        color: #8e8e8e;
        padding: .1rem .2rem;
        font-family: Arial, Helvetica, Hiragino Sans GB, Microsoft YaHei, sans-serif
    }
    
    .mark {
        color: red !important;
    }
    
    .remove-channels-list {
        padding: .16rem 0rem;
        /* margin: .1rem 0rem; */
        list-style: none;
        font-size: .32rem;
        color: #333;
        font-weight: 400;
        font-family: Arial, Helvetica, Hiragino Sans GB, Microsoft YaHei, sans-serif
    }
    
    .channels-list-item {
        display: inline-block;
        /* margin-bottom: .2rem; */
        border: 1px solid #ccc;
        padding: .08rem .43rem;
        margin: 0rem .16rem .2rem .16rem;
        animation: zoomIn .3s ease;
        -webkit-animation: zoomIn .3s ease;
    }
    
    .current-channels {
        background-color: #f0f0f0;
    }
    
    @keyframes zoomIn {
        0% {
            opacity: 0;
            -webkit-transform: scale3d(.3, .3, .3);
            transform: scale3d(.3, .3, .3);
        }
        50% {
            opacity: 1;
        }
    }
</style>

