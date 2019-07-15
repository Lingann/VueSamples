/*
*   获取krpano对象
* */
var krpano = {
    base : null,
    config: {
        swf : "tour.swf", 		// path to flash viewer (use null if no flash fallback will be requiered)
        id : "krpanoSWFObject",
        xml : "tour.xml",
        target : "pano",
        mobilescale:1.0,
        html5:"auto",
        consolelog : true,					// trace krpano messages also to the browser console
        passQueryParameters : true, 		// pass query parameters of the url to krpano
        onready : function (krpano_interface) {
            krpano.base = krpano_interface;
            if(krpano.onReady!=null){
                krpano.onReady();
            }
            setTimeout( krpano.init.bind(krpano), 1000);
        }
    },
    scenesInfo : null,
    onReady : null,
    onComplete: null
};

krpano.render = function(config,oncomplete,onready){
    var self = this;
    if(config.swf != null){
        self.config.swf = config.swf;
    }
    if(config.id != null){
        self.config.id = config.id;
    }
    if(config.xml != null){
        self.config.xml = config.xml;
    }
    if(config.target != null){
        self.config.target = config.target;
    }
    if(config.mobilescale != null){
        self.config.mobilescale = config.mobilescale;
    }
    if(config.html5 != null){
        self.config.html5 = config.html5;
    }
    if(config.consolelog != null){
        self.config.consolelog = config.consolelog;
    }
    if(config.passQueryParameters != null){
        self.config.passQueryParameters = config.passQueryParameters;
    }
    if(onready!=null){
        self.onReady = onready;
    }
    if(oncomplete!=null){
        self.onComplete = oncomplete;
    }
    console.log(self.onComplete);
    // 初始设置
    embedpano(self.config);
};

krpano.init = function(){
    var self = this;
    self.scenesInfo = self.base.get("scene");   // 获取所有场景属性
    console.log(self.onComplete);
    if(self.onComplete!== null){
        self.onComplete();
    }
};

// 加载pano
krpano.loadPano = function(xmlPath) {
    var self = this;
    self.base.call('loadpano("'+xmlPath+'")');
};

// 加载场景
krpano.loadScene = function (scene) {
    var self = this;
    self.base.call('loadscene("'+scene.name+'")');
    if(scene.onEnter){
        scene.onEnter();
    }
};
// 加载场景
krpano.loadSceneByName = function (sceneName) {
    var self = this;
    self.base.call('loadscene("'+sceneName+'",null,MERGE,ZOOMBLEND(1,2,"easeInOutSine"));wait(LOAD);');
};

//设置场景view
krpano.getView = function(){
    var self = this;
    var view = self.base.get('view');
    return view;
};

krpano.setView = function(viewConfig){
    if(viewConfig.fov != null){
        krpano.base.set("view.fov", viewConfig.fov);
    }
    if(viewConfig.stereographic!=null){
        krpano.base.set("view.stereographic", viewConfig.stereographic);
    }
    if(viewConfig.fisheye!=null){
        krpano.base.set("view.fisheye", viewConfig.fisheye);
    }
    if(viewConfig.fovmax!=null){
        krpano.base.set("view.fovmax", viewConfig.fovmax);
    }
    if(viewConfig.hlookat!=null){
        krpano.base.set("view.hlookat", viewConfig.hlookat);
    }
    if(viewConfig.vlookat!=null){
        krpano.base.set("view.vlookat", viewConfig.vlookat);
    }
    if(viewConfig.maxpixelzoom!=null){
        krpano.base.set("view.maxpixelzoom", viewConfig.maxpixelzoom);
    }
};

// 获取场景视角参数
krpano.getViewByScene = function(index){
    var sceneInfo = krpano.scenesInfo.getItem(index).content;
    var nodes = $(sceneInfo);
    for(var i =0; i< nodes.length; i++) {
        var temp = $(nodes[i]);
        if(temp[0].localName == 'view'){
            return temp;
        }
    }
};

// 正常显示
krpano.normalView  = function () {
    var self = this;
    self.base.call('normalview');
};

// 显示皮肤
krpano.showSkin = function () {
    var self = this;
    self.base.call('skin_showskin');
};

// 隐藏皮肤
krpano.hideSkin = function () {
    var self = this;
    self.base.call('skin_hideskin');
};

krpano.startAutoRotate = function () {
    var self = this;
    self.base.call('startautorotate');
};

krpano.stopAutoRotate = function () {
    var self = this;
    self.base.call('stopautorotate');
};



