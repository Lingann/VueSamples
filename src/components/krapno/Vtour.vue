<template>
    <div class="pano-container">
        <p>加载组件成果</p>
        <!--<krpano :xml="xml" :scene="scene" :hooks="hooks"></krpano>-->
        <div id="pano" style="width:100%;height:100%;">
            <noscript><table style="width:100%;height:100%;"><tr style="vertical-align:middle;"><td><div style="text-align:center;">ERROR:<br/><br/>Javascript not activated<br/><br/></div></td></tr></table></noscript>
        </div>
    </div>

</template>

<script>
    import Krapno from "../../utils/krpano/Krpano"
    let krapno = new Krapno();
    export default {
        name: "Vtour",
        data: function () {
            return {
                option: {
                    swf : "fuzhou/tour.swf", 		// path to flash viewer (use null if no flash fallback will be requiered)
                    id : "krpanoSWFObject",
                    xml : "fuzhou/tour.xml",
                    target : "pano",
                    mobilescale:1.0,
                    html5:"auto",
                    consolelog : true,					// trace krpano messages also to the browser console
                    passQueryParameters : true, 		// pass query parameters of the url to krpano
                },
            }
        },
        mounted: function () {

            // embedpano(this.option);
            // krapno.log();
            krapno.render(this.option);
            console.log(krapno.layer);
        }
    }
</script>

<style scoped>
    #pano{
        width: 100px;
        height: 600px;
    }
    .pano-container {
        width: 1000px;
        height: 600px;
    }
</style>
