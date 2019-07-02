<template>
    <div id="container" class="bg-sample">
        <div class="side-menu bg-blue">
            <ul>
                <router-link tag="li" class="link row center-xs middle-xs" :to="{name: 'list'}"><div class="col"><div class="box">list</div></div></router-link>
                <router-link tag="li" class="link row center-xs middle-xs" :to="{name: 'data'}"><div class="col"><div class="box">list</div></div></router-link>
                <router-link tag="li" class="link row center-xs middle-xs" :to="{name: 'list'}"><div class="col"><div class="box">list</div></div></router-link>
                <router-link tag="li" class="link row center-xs middle-xs" :to="{name: 'list'}"><div class="col"><div class="box">list</div></div></router-link>
                <router-link tag="li" class="link row center-xs middle-xs" :to="{name: 'list'}"><div class="col"><div class="box">list</div></div></router-link>
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
