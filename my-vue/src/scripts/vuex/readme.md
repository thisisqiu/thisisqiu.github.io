#   vuex   单向数据流  

# cnpm i vuex --save

#   集中式的管理数据  (数据状态管理)    状态管理  管理组件的data computed 



#  Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态



# vue 应用分为 3 层 
# state，驱动应用的数据源；data 
# view，以声明方式将 state 映射到视图； component 
# actions，响应在 view 上的用户输入导致的状态变化。  methods 

# 单向数据流  view ==>  action  ==> state ==> view


# vuex 使用场景  (比较复杂的逻辑 )

# 多个视图依赖于同一状态。
# 来自不同视图的行为需要变更同一状态。


#  vuex 分层

# vuecomponent 组件视图
# actions    动作
# mutations   异变
# state      数据   组件的data


# vuex 原理  
# 1  组件 vue component dispatch(发出) 某种 动作 (action acitonType);
# 2  匹配到对应的动作(action) 会显式的提交(commit)  某种 管理异变类型 (mutation type);
# 3  匹配到对应的管理异变 (mutation)  就直接去修改(mutate  集中式管理) state  
# 4  vuex 检测变化的 state ,马上去 render (二次渲染) 组件 
 



 # 三个辅助函数 
 # mapState  映射 
 # mapActions 
 # mapGetters 
 # mapMutations 


# Mutation 需遵守 Vue 的响应规则

# Vuex 的 store 中的状态是响应式的

# 可变对象    数组 object 
# 不可变对象  number string boolean 

# 使用 Vue.set(obj, 'newProp', 123), 或者

# 以新对象替换老对象。例如，利用 stage-3 的对象展开运算符我们可以这样写：