


export default {
    // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation

    setUser(state,data){
        state.user = data;//改变state
    },
    coffeeInfo(state,data){
        state.coffeeInfo = data;
    },
    breadInfo(state,data){
        state.breadInfo = data;
    },
    setSearchInfo(state,data){
        state.searchInfo = data;
    }
}