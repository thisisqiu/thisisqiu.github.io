<template>
    <div id='headBox'>
        {{title}}
        <!-- <i class="el-icon-search"></i> -->
    </div>
</template>
<script>
export default {
    props:{
        title:String,
        show:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
    #headBox{
        background-color: #7d5440;
        width: 100%;
        height:50px;
        overflow: hidden;
        text-align: center;
    }
</style>


