<template>
    <div id="home">
        <my-header></my-header>
        <silder @changeContent="changeContent"></silder>
        <router-view :newsType="newsType"></router-view>
    </div>
</template>

<script>
import myHeader from '../components/header.vue'
import Silder from '../components/silder.vue'
    export default {
        data () {
            return {
                newsType: 0
            }
        },
        components: {
            myHeader,
            Silder
        },
        methods: {
            changeContent(content){
                // console.log(content)
                // console.log(content.title)
                this.newsType = content.id
            }
        }
    }
</script>

<style>
    #home {
        height: 100%;
        width: 100%;
    }
</style>

