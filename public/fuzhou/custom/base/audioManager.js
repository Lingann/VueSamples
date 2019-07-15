(function ($) {
    function AudioManager(options) {
        var self = this;
        this.dict = new Dictionary();
        this.options = {
          emptyAudioUrl: "https://lingann.oss-cn-beijing.aliyuncs.com/empty.mp3"
        };
        this.loader = new createjs.LoadQueue(true,null,true);
        this.init(options);
    }

    // 初始化
    AudioManager.prototype.init = function(options){
        var self = this;
        self.options = $.extend(self.options,options);
        console.log(self);
        self.loader.installPlugin(createjs.Sound);
        createjs.Sound.alternateExtensions = ["mp3"];
        self.loader.loadFile({id:"empty",src: self.options.emptyAudioUrl});
        self.add("empty");

    };

    // 加载多个音频
    AudioManager.prototype.loadManifest = function(manifest){
        var self = this;
        self.loader.loadManifest(manifest);
    };

    /*
    * 加入事件监听
    * @type :
    *   'fileload' : 文件加载回调
    *   'complete' : 文件加载完回调
    *   'progress' : 文件加载过程中回调
    * */
    AudioManager.prototype.addLoaderEventListener = function(type,callback){
        var self = this;
        self.loader.addEventListener(type,callback);
    };

    // 预加载音频
    AudioManager.prototype.preload = function (name,src) {
        var self = this;
        if(!self.dict.has(name)){
            this.loader.loadFile({id:name,src: src});
        }
    };

    // 获取音频
    AudioManager.prototype.get = function (name) {
        var self = this;
        if(!self.dict.has(name)){
            var audio = self.loader.getResult(name);
            self.add(name,audio);
            return  audio;
        }else {
            return self.dict.get(name);
        }
    };

    // 添加音频
    AudioManager.prototype.add = function (name) {
        var audio = createjs.Sound.play(name);
        audio.paused = true;
        this.dict.set(name,audio);
    };

    // 播放音频
    AudioManager.prototype.play = function (name,path) {
        var self = this;
        if(self.dict.has(name)){
            var audio = self.dict.get(name);
            createjs.Sound.play('empty');
            audio.play(name);
        }else {
            createjs.Sound.on("fileload", loadHandler, this);
            createjs.Sound.registerSound(path, name);
            function loadHandler(event) {
                // This is fired for each sound that is registered.
                var instance = createjs.Sound.play(name);  // play using id.  Could also use full sourcepath or event.src.
                instance.on("complete", handleComplete, this);
                instance.volume = 1;
                self.dict.set(name,instance);
            }
            function handleComplete() {
                
            }
        }
        console.log("播放音频：" + name)
    };

    // 关闭声音，并将声音位置重置为0，resume将失效，再次播放调用play()
    AudioManager.prototype.stop = function(name){
        var self = this;
        if(self.dict.has(name)){
            var audio = self.dict.get(name);
            audio.stop(name);
        }
    };

    // 静音
    AudioManager.prototype.mute = function () {
        if(this.dict.size() > 0 ){
            var items = this.dict.values();
            for(var i in items){
                items[i].volume = 0;
            }
        }
    };

    // 设置音量
    AudioManager.prototype.setVolume = function (vol) {
        if(this.dict.size() > 0 ){
            var items = this.dict.values();
            for(var i in items){
                items[i].volume = vol;
            }
        }
    };

    // 暂停音频
    AudioManager.prototype.pause = function (name) {
        if(this.dict.has(name)){
            var audio = this.dict.get(name);
            audio.paused = true;
        }
    };

    // 暂停所有音频
    AudioManager.prototype.pasueAll = function () {
        if(this.dict.size() > 0 ){
            var items = this.dict.values();
            for(var i in items){
                items[i].pause();
            }
        }
    };

    // 重新播放
    AudioManager.prototype.restart = function(name){
        if(this.dict.has(name)){
            var audio = this.dict.get(name);
            audio.position = 0;
            audio.play(name);
        }
    };

    // 判断是否为空
    AudioManager.prototype.isEmpty = function () {
        return this.dict.size() === 0;
    };

    // 设置剩余循环，只播放一次为0，负数为无限循环
    AudioManager.prototype.setLoop = function (name,loop) {
        var self = this;
        if(self.dict.has(name)){
            var audio = self.dict.get(name);
            audio.loop = loop;
        }
    };

    $.extend($,{
        audioManager : function (options) {
           return new AudioManager(options);
        }
    })
})(jQuery);

