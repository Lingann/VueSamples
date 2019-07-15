<template>
    <div>
        <ul>
            <li v-for="item in items" v-bind:key="item.id">
                <div class="card">
                    <img src="favicon.ico"/>
                    <div class="card-des">{{item.uid}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    var vuelist = require('../../config/vuelist.js');
    export default {
        name: "List",
        data: function () {
            return {
                items : vuelist.vuelist.list
            }
        }

    }
</script>

<style lang="scss" scoped>
    ul{
        li{
            float: left;
        }
    }

.card{
    width: 240px;
    height: 260px;
    background: #ffffff;
    margin: 10px 5px 10px 5px;
    &:hover{
        box-shadow:4px 4px 6px 4px #adb9c4;
        cursor: pointer;
    }
    .card-des{
        height: 55px;
        border-top: 1px solid #ededed;
    }
}

</style>
