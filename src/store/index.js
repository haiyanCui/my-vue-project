import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import tagView from './modules/tagView'
import toggleState from './modules/toggleState'
import getters from './getters'

Vue.use(Vuex)
const store  = new Vuex.Store({
    modules:{
        user,
        tagView,
        toggleState
    },
    getters,
})
export default store