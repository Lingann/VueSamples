<template>
    <krpano :xml="xml" :scene="scene" :hooks="hooks"></krpano>
</template>

<script>
    export default {
        name: "VueKrpano",
        data : function(){
            const vm = this;
            return {
                xml: "fuzhou/tour.xml",
                scene: "screen_01",
                hooks: {
                    sceneChanged(scene) {
                        //event handler
                    }
                }
            }

        }
    }
</script>

<style scoped>

</style>
