<template>
    <div class="message">
        <div class="message-box">
            <span class="message-close" @click="closeModal"></span>
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
</style>

