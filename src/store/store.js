import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {          // 组件间共享的数据
    removeArr: [{
        id: 0,
        title:'推荐'
    },{
        id: 1,
        title:'热点'
    },{
        id: 2,
        title:'娱乐'
    },{
        id: 3,
        title:'体育'
    },{
        id: 4,
        title:'军事'
    },{
        id: 5,
        title:'社会'
    },{
        id: 6,
        title:'旅游'
    }],
    addArr: [{
        id: 7,
        title:'科技'
    },{
        id: 8,
        title:'汽车'
    },{
        id: 9,
        title:'财经'
    },{
        id: 10,
        title:'国际'
    },{
        id: 11,
        title:'时尚'
    },{
        id: 12,
        title:'游戏'
    },{
        id: 13,
        title:'历史'
    },{
        id: 14,
        title:'探索'
    },{
        id: 15,
        title:'美食'
    },{
        id: 16,
        title:'育儿'
    },{
        id: 17,
        title:'养生'
    },{
        id: 18,
        title:'故事'
    },{
        id: 19,
        title:'美文'
    }]
}

const mutations = {      // 修改共享数据
    setRemoveArr: (state, value) => {    
        state.removeArr = value
    },
    setAddArr: (state, value) => {    
        state.addArr = value
    }
}

const getters = {        // 获取共享数据
    getRemoveArr: state => {
        return state.removeArr
    },
    getAddArr: state => {
        return state.addArr
    }
}

export default new Vuex.Store({
    getters,
    state,
    mutations
})