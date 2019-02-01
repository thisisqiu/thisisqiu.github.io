<template>
    <div id='carousel' >
        <v-carousel 
            height='170' 
            hide-delimiters
            interval='3000'
        >
            <v-carousel-item
            v-for="(item,i) in imgs"
            :key="i"
            :src="item"
            class='img'
            ></v-carousel-item>
        </v-carousel>
    </div>
</template>
<script>
export default {
        data(){
        return {
            imgs:[
                require("../assets/img/kv1.jpg"),
                require("../assets/img/kv2.jpg"),
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
    #carousel{
        width: 100%;
        margin-top: 3.6rem;
    }
</style>



