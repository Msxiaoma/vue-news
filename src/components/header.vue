<template>
    <div class="stage-header">
        <div class="header-left">
            <img src="../assets/img/message.png" class="header-message">
        </div>
        <div class="header-center">
            <img src="../assets/img/logo.png" class="header-logo"/><img src="../assets/img/refresh.png" class="header-refresh"/>
             
        </div>
        <div class="header-left">
            <img src="../assets/img/search.png" class="header-message">
        </div>
    </div>
</template>
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
</style>

