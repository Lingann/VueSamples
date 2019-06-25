<template>
    <header class="header">
        <div>
            <span>顶部</span>
            <ul>
                <!--使用 <router-link>连接路由 -->
                <li><router-link to="/">主页</router-link></li>
                <li><router-link to="/Hello">Hello</router-link></li>
                <li><router-link to="/Sample">Sample</router-link></li>
            </ul>
        </div>
    </header>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>
.header{
    color: red;
}

</style>
