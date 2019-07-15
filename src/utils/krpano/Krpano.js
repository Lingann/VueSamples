"use strict";
const _krpano = require('./tour');
const _layerManager = require('./layerManager');

function Krpano() {
    let self = this;
    this.base = null;
    this.layer = null;
    this.option = {
        swf : "tour.swf", 		// path to flash viewer (use null if no flash fallback will be requiered)
        id : "krpanoSWFObject",
        xml : "tour.xml",
        target : "pano",
        mobilescale:1.0,
        html5:"auto",
        consolelog : true,					// trace krpano messages also to the browser console
        passQueryParameters : true, 		// pass query parameters of the url to krpano
        onready : function (krpano_interface) {
            self.base = krpano_interface;
            if(self.onReady!=null){
                self.onReady();
            }
            setTimeout( self.init.bind(this), 1000);
        },
    };
    this.init = function () {
        self.scenesInfo = self.base.get("scene");   // 获取所有场景属性
        // console.log(self.onComplete);
        if(self.onComplete!== null){
            self.onComplete();
        }
    };
    this.scenesInfo = null;
    this.onReady = null;
    this.onComplete=null;
}

Krpano.prototype.render = function(option,oncomplete,onready){
    let self = this;
    if(option.swf != null){
        self.option.swf = option.swf;
    }
    if(option.id != null){
        self.option.id = option.id;
    }
    if(option.xml != null){
        self.option.xml = option.xml;
    }
    if(option.target != null){
        self.option.target = option.target;
    }
    if(option.mobilescale != null){
        self.option.mobilescale = option.mobilescale;
    }
    if(option.html5 != null){
        self.option.html5 = option.html5;
    }
    if(option.consolelog != null){
        self.option.consolelog = option.consolelog;
    }
    if(option.passQueryParameters != null){
        self.option.passQueryParameters = option.passQueryParameters;
    }
    if(onready!=null){
        self.onReady = onready;
    }
    if(oncomplete!=null){
        self.onComplete = oncomplete;
    }
    // console.log(self.option);
    // console.log(krpano.removepano);
    // console.log(krpano.krpanoJS);
    // 初始设置
    embedpano(self.option)
    self.layer = _layerManager;
};

// 加载全景
Krpano.prototype.loadPano = function (xmlPath) {
    let self = this;
    self.base.call('loadpano("'+xmlPath+'")');
};

// 加载场景
Krpano.prototype.loadScene = function (sceneName) {
    let self = this;
    self.base.call('loadscene("'+sceneName+'",null,MERGE,ZOOMBLEND(1,2,"easeInOutSine"));wait(LOAD);');
};

//获取场景view
Krpano.prototype.getView = function(){
    let self = this;
    return self.base.get('view');
};

// 设置场景View
Krpano.prototype.setView = function (viewConfig) {
    var self = this;
    if(viewConfig.fov != null){
        self.base.set("view.fov", viewConfig.fov);
    }
    if(viewConfig.stereographic!=null){
        self.base.set("view.stereographic", viewConfig.stereographic);
    }
    if(viewConfig.fisheye!=null){
        self.base.set("view.fisheye", viewConfig.fisheye);
    }
    if(viewConfig.fovmax!=null){
        self.base.set("view.fovmax", viewConfig.fovmax);
    }
    if(viewConfig.hlookat!=null){
        self.base.set("view.hlookat", viewConfig.hlookat);
    }
    if(viewConfig.vlookat!=null){
        self.base.set("view.vlookat", viewConfig.vlookat);
    }
    if(viewConfig.maxpixelzoom!=null){
        self.base.set("view.maxpixelzoom", viewConfig.maxpixelzoom);
    }
};

export default Krpano;
