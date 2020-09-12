import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

const requireJS = require.context('.',true,/.js$/)

let modules = {}
requireJS.keys().forEach(item =>{
    if(item === './index.js') return ;
    let obj = requireJS(item) ;
    let {name} = obj.default;
    modules[name] = obj.default ;
})

Vue.use(Vuex)

export default new Vuex.Store({
    modules,
    plugins:[createPersistedState()]
})
