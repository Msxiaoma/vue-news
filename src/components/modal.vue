<template>
    <div class="message">
        <div class="message-box">
            <span class="message-close" @click="closeModal"></span>
            <img class="message-banner" src="../assets/img/banner.png">
            <p class="message-tip">已加载好您感兴趣的头条</p>
            <div class="download-btn">立即打开</div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        closeModal() {
            this.$emit('closeModal')
        }
    }
}
</script>

<style>
.message{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.5);
}
.message-box{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -2.7rem;
    margin-top: -2.25rem;
    width: 5.4rem;
    height: 4.5rem;
    background: #ffffff;
    border-radius: .1rem;
}
.message-close{
    background: url('../assets/img/close.png') no-repeat center;
    background-size: .34rem;
    position: absolute;
    right: 0px;
    top: 0px;
    width: .8rem;
    height: .68rem;
}
.message-banner{
    position: relative;
    top: .2rem;
    height: 2.42rem;
    width: 3.3rem;
    display: block;
    margin: 0 auto;
}
.message-tip{
    margin-top: .26rem;
    margin-bottom: .48rem;
    font-size: .34rem;
    text-align: center;
    color: #a5a5a5;
}
.download-btn{
    font-size: .4rem;
    text-align: center;
    background: #ff6762;
    color: #fff;
    border-radius: .1rem;
    text-shadow: 0px 1px 1px #f0221c;
    padding: .1rem .4rem;
    margin: 0rem .5rem;
}
</style>

