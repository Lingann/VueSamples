<template>
<div>
    <div id="container" ref="container"></div>
</div>
</template>

<script>
    // import * as Three from "three";
    // let three = Three;
    export default {
        name: "startScene",
        data: function () {
            return {
                scene: null,
                camera : null,
                renderer: null,
            }
        },
        created : function(){
          this.init();
        },

        methods: {
            init : function(){
                let self = this;
                this.scene = new this.Three.Scene();
                this.camera = new this.Three.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
                this.renderer = new this.Three.WebGLRenderer();
                let geometry = new this.Three.BoxGeometry( 1, 1, 1 );
                let material = new this.Three.MeshBasicMaterial( { color: 0x00ff00 } );
                let cube = new this.Three.Mesh( geometry, material );
                self.scene.add(cube);
                self.camera.position.z = 5;

                let animate = function () {
                    requestAnimationFrame(animate);
                    cube.rotation.x += 0.01;
                    cube.rotation.y += 0.01;
                    self.renderer.render(self.scene, self.camera );
                };
                animate();
                self.renderer.setSize(window.innerWidth/2, window.innerHeight/2 );

                document.getElementById("container").appendChild(self.renderer.domElement);

                // this.$refs.container.$mount();
            }
        }

    }
</script>

<style scoped>

</style>
