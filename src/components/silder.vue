<template>
    <div class="header-silder">
        <ul class="silder-list">
            <li v-for="(item,index) in tabArr"  @click="changeTab(index,item)" :class="{'current': currentIndex === index}" :key="item.id">{{item.title}}</li>
        </ul>
        <div class="add-chanel" @click="linkChannels">
            <img src="../assets/img/add.png" class="add-btn"/>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            currentIndex: 0,
            tabArr:[]
        }
    },
    computed: {
        ...mapGetters(['getRemoveArr'])
    },
    mounted(){
        this.tabArr = this.getRemoveArr
    },
    methods:{
        changeTab(index,item){
            this.currentIndex = index
            this.$emit('changeContent', item)
        },
        linkChannels() {
            this.$router.push('/channels')
        }
    }
}
</script>

<style>
.header-silder{
    position: fixed;
    top: .88rem;
    width: 100%;
    background: #f4f5f6;
    border-bottom: .01rem solid #ddd; 
    z-index: 1;
}
.silder-list{
    width: 6.67rem;
    height: .72rem;
    padding: .1rem .1rem;
    box-sizing: border-box;
    overflow-x: scroll;
    list-style: none;
    display: -webkit-box;
}
.silder-list li{
    width: .68rem;
    height: .52rem;
    font-size: .34rem;
    padding: 0rem .24rem;
    color: #505050bf;
}
.current{
    color: #f85959!important;
}
.add-chanel{
    position: absolute;
    width: .8rem;
    right: 0px;
    height: .72rem;
    /* background: #f85959; */
    top: -.01rem;
}
.add-btn{
    position: absolute;
    top: .14rem;
    left: .2rem;
    width: .4rem;
    height: .4rem;
}
</style>

