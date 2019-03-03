const getters = {
    token: state => state.user.token,
    visitedViews: state => state.tagView.visitedViews,
    togState: state => state.toggleState.togState
}

export default getters