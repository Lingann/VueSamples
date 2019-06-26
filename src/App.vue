<template>
  <div id="app">
      <!--使用router-view将路由渲染出来-->
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
    @import "./style/common";
    @import "./style/flexboxgrid";
#app {
    width: 100%;
    height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

    html,body{
        width: 100%;
        height: 100%;
    }
</style>
