<template>
    <div id="home">
        <my-header @showModal="showModal"></my-header>
        <silder @changeContent="changeContent"></silder>
        <router-view :newsType="newsType"></router-view>
        <modal v-if="showMessage" @closeModal="closeModal"></modal>
    </div>
</template>

<script>
import myHeader from '../components/header'
import Silder from '../components/silder'
import Modal from '../components/modal'
    export default {
        data () {
            return {
                newsType: 0,
                showMessage: false
            }
        },
        components: {
            myHeader,
            Silder,
            Modal
        },
        methods: {
            changeContent(content){
                // console.log(content)
                // console.log(content.title)
                this.newsType = content.id
            },
            showModal(){
                this.showMessage = true
            },
            closeModal(){
                this.showMessage = false
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

