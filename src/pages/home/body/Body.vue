<template>
    <div id="container" class="bg-sample">
        <div class="side-menu bg-blue">
            <ul>
                <router-link tag="li" class="link row center-xs middle-xs" :to="{name: 'list'}"><div class="col"><div class="box">list</div></div></router-link>
                <router-link tag="li" class="link row center-xs middle-xs" :to="{name: 'data'}"><div class="col"><div class="box">data</div></div></router-link>
                <router-link tag="li" class="link row center-xs middle-xs" :to="{name: 'user'}"><div class="col"><div class="box">user</div></div></router-link>
                <router-link tag="li" class="link row center-xs middle-xs" :to="{name: 'startScene'}"><div class="col"><div class="box">startScene</div></div></router-link>
                <router-link tag="li" class="link row center-xs middle-xs" :to="{name: 'vtour'}"><div class="col"><div class="box">vtour</div></div></router-link>
                <router-link tag="li" class="link row center-xs middle-xs" :to="{name: 'vueKrapno'}"><div class="col"><div class="box">vueKrapno</div></div></router-link>
                <router-link tag="li" class="link row center-xs middle-xs" :to="{name: 'modal'}"><div class="col"><div class="box">modal</div></div></router-link>
                <router-link tag="li" class="link row center-xs middle-xs" :to="{name: 'modals'}"><div class="col"><div class="box">modals</div></div></router-link>

            </ul>
        </div>
        <div class="right-container"><router-view></router-view></div>
    </div>
</template>

<script>
    export default {
        name: "Body"
    }
</script>

<style lang="scss" scoped>
    @import "../../../style/bgcolors";
    html,body{
        height: 100%;
        width: 100%;
    }
    #container{
        background: #019fa0;
        width: 100%;
        height: 100%;
    }
    .box{
        position: relative;
        text-align: center;
    }
    .side-menu{
        position: fixed;
        width: 260px;
        height: 100%;
        background-color: $gray-blue;
        ul{
            li{
                height: 60px;
                color: #ffffff;
                &:hover {
                    background-color: $dark-gray-blue;
                }
            }


        }
    }
    .right-container{
        margin-left: 260px;
        /*width:*/
    }
</style>
