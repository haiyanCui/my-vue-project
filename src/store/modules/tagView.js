const tagView = {
    stste:{
        visitedViews:[],
        cachedViews:[]
    },
    mutations:{
        
        ADD_VISITED_VIEW: (state,view) => {
            if(state.visitedViews.some(v => v.path === view.path)) return
            state.visitedViews.push(
                Object.assign({}, view, {
                    title:view.meta.title || 'no-name'
                })
            )
        },
        DEL_VISITED_VIEW: (state,view) =>{
            for(const [i, v] of state.visitedViews.entries()){
                if(v.path === view.path){
                    state.visitedViews = state.visitedViews.slice(i, 1)
                    break
                }
            }
        },
        DEL_ALL_VISITED_VIEWS: state =>{
            state.visitedViews = []
        }
    },
    actions:{
        addView({ dispatch }, view) {
            dispatch('addVisitedView', view)
            // dispatch('addCachedView', view)
        },
        addVisitedView({ commit }, view){
            commit('ADD_VISITED_VIEW', view)
        },
        delVisitedView({ commit, state }, view){
            return new Promise(resolve =>{
                commit('DEL_VISITED_VIEW',view)
                resolve([])
            })
            
        },
        delAllVisitedViews({ commit },view){
            return new Promise(resolve =>{
                commit('DEL_ALL_VISITED_VIEWS')
                resolve([])
            })
        }
    }
}
export default tagView