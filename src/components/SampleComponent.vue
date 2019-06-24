<template>
    <div>
        <h3>{{title}}</h3>
        <!--点击事件-->
        <button v-on:click="count++">clicked me</button>
        <!--双向绑定-->
        <input v-model="count"/>
        <!--变量展示-->
        <p>{{count}}</p>

        <!--循环输出-->
        <ul>
            <li v-bind:key="todo.text" v-for="todo in todos">
                {{ todo.text }}
            </li>
        </ul>

        <!--绑定事件-->
        <button v-on:click="logCount">弹出数据</button>
    </div>

</template>

<script>
    export default {
        name: "SampleComponent",
        // 通过prop向子组件传递数据 prop是你可以在组件上注册的一些自定义特性
        props: [
            'title'
        ],
        // 一个组件的data必须是一个函数，因此每个实例可以维护一份被返回对象的独立拷贝
        data: function () {
            return {
                count: 0,
                todos: [
                    {text:"todo_i"},
                    {text:"todo_ii"},
                    {text:"todu_iii"},
                ]
            }
        },
        // 方法列表
        methods: {
            logCount: function () {
                alert(this.count);
            }
        }
    }
</script>

<style scoped>

</style>