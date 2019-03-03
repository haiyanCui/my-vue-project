const toggleState = {
    state:{
        togState:false
    },
    mutations:{
        TOGGLE_SIDEBAR: state =>{
            state.togState = !state.togState
        }
    },
    actions:{
        toggleSideBar({ commit }){
            commit('TOGGLE_SIDEBAR')
        }
    }
}
export default toggleState