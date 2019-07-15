<template>
    <div>
        <div id="container"></div>
    </div>
</template>

<script>
    export default {
        name: "ObjLoader",
        data: function(){
          return{
              cameras: null,
              scene: null,
              renderer: null,
              mesh:null
          }
        },
        methods:{
            loader: function () {
                this.$objLoader(
                    "",

                )
            }
        }
    }
</script>

<style scoped>

</style>
