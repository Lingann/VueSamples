<template>
    <div id="container" class="row bg-sample">
        <div class="side-menu col-xs-2 bg-blue">
            <ul>
                <router-link tag="li" class="link row center-xs middle-xs" :to="{name: 'list'}"><div class="col"><div class="box">list</div></div></router-link>
                <router-link tag="li" class="link row center-xs middle-xs" :to="{name: 'data'}"><div class="col"><div class="box">list</div></div></router-link>
                <router-link tag="li" class="link row center-xs middle-xs" :to="{name: 'list'}"><div class="col"><div class="box">list</div></div></router-link>
                <router-link tag="li" class="link row center-xs middle-xs" :to="{name: 'list'}"><div class="col"><div class="box">list</div></div></router-link>
                <router-link tag="li" class="link row center-xs middle-xs" :to="{name: 'list'}"><div class="col"><div class="box">list</div></div></router-link>
            </ul>
        </div>
        <div class="col-xs-21"><router-view></router-view></div>
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
        height: calc( 100% - 80px );
    }
    .box{
        position: relative;
        text-align: center;
    }
    .side-menu{
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
</style>
