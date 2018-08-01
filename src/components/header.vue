<template>
    <div class="stage-header">
        <div class="header-left">
            <img src="../assets/img/message.png" class="header-message" @click="showModal">
        </div>
        <div class="header-center" @click="refreshPage">
            <img src="../assets/img/logo.png" class="header-logo"/><img src="../assets/img/refresh.png" class="header-refresh" :class="{'rotate': refresh === true}"/>
        </div>
        <div class="header-left">
            <img src="../assets/img/search.png" class="header-message" @click="search">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            refresh: false
        }
    },
    methods: {
        refreshPage() {
            this.refresh = true
            setTimeout(() => {
                this.refresh = false
            }, 200);
        },
        search() {
            this.$router.push('/search')
        },
        showModal() {
            this.$emit('showModal')
        }
    }
}
</script>

<style>
.stage-header{
    position: fixed;
    height: .88rem;
    width: 100%;
    background: #d43d3d;
    z-index: 1;
}
.header-left{
    position: relative;
    height: .5rem;
    margin-left: .48rem;
    display: inline-block;
}
.header-message{
    position: relative;
    top: -.36rem;
    width: .5rem;
    height: .5rem;
}
.header-center{
    display: inline-block;
    width: 4.5rem;
    height: .88rem;
    text-align: center;
}
.header-logo{
    position: relative;
    top: -.4rem;
    width: 1.7rem;
    height: .4rem;
    display: inline-block;  
}
.header-refresh{
    position: relative;
    top: -.44rem;
    width: .3rem;
    height: .3rem;
    display: inline-block;
    margin-left: .1rem;
}
 .rotate {
  -webkit-transform-style: preserve-3d;
  -webkit-animation: x-spin 0.7s linear;
}
@-webkit-keyframes x-spin {
  0% {
    -webkit-transform: rotateZ(0deg);
  }
  50% {
    -webkit-transform: rotateZ(180deg);
  }
  100% {
    -webkit-transform: rotateZ(360deg);
  }
}
</style>

