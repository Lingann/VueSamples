"use strict";
const layerManager = {
    msg: function (e) {
        console.log(e);
    },
    info: function(content){
        console.log(content);
    },
    pop: function(src){
        console.log(src)
    },
    iframe: function (src) {
        console.log(src)
    },
    image : function(src,content){
        content.log(src);
    },
    video: function (videoSrc) {
        console.log(videoSrc);
    }
};

export default layerManager;
