<template>

    <div id='footBox'>
        <p>{{url}}</p>
        <v-bottom-nav
            :active.sync="activeBtn"
            :value="showNav"
            absolute
            color="transparent"
        >
            <router-link :to="{name:'home'}">
                <v-btn
                    color="#7d5440"
                    flat
                >
                    <span>首页</span>
                    <v-icon medium>home</v-icon>
                </v-btn>
            </router-link>

            <router-link :to="{name:'goods'}">
                <v-btn
                    color="#7d5440"
                    flat
                >
                    <span>咖啡</span>
                    <v-icon medium>local_cafe</v-icon>
                </v-btn>
            </router-link>

            <router-link :to="{name:'car'}">
                <v-btn
                    color="#7d5440"
                    flat
                >
                    <span>购物车</span>
                    <v-icon medium>shopping_cart</v-icon>
                </v-btn>
            </router-link>

            <router-link :to="{name:'my'}">
                <v-btn
                    color="#7d5440"
                    flat
                >
                    <span>我的</span>
                    <v-icon medium>person</v-icon>
                </v-btn>
            </router-link>

        </v-bottom-nav>
    </div>
    
</template>
<script>
export default {
    data() {
        return {
            activeBtn: 0,
            showNav: true
        };
    },

    props:[
        'url'
    ],

    watch:{
        activeBtn:function(val){
            console.log(val)
        }
    }


};
</script>
<style lang="scss" scoped>
    a {
        text-decoration: none;
    }
    #footBox{
        height: 56px;
        width: 100%;
        z-index:99;
        position: fixed;
        bottom:0;
        left:0;
        background-color: #fff;
    }
</style>


