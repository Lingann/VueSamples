/**
 * 图片预加载插件Preload
 *
 * @param array imgs  预加载的图片地址数组列表
 * @param Object options  配置参数
 */
 var audioManager = null;

function audioPauseAll() {
    audioManager.pause('bgm');
    audioManager.pause('guide');
}

function audioResmueAll() {
    audioManager.play('bgm');
    audioManager.play('guide');
}

(function ($) {
    function Preload(imgs, options) {
        this.imgs = (typeof imgs === 'string') ? [imgs] : imgs;
        this.options = {
            order: false, //默认值false,代表无序加载
            minTimer: 0, //完成加载的最少时间，单位ms,默认为0，一般展示类型的loading动画会需要设置
            each: null, //单张图片加载完执行的方法,一般是修改进度状态
            end: null //所有图片加载完执行的方法，一般是隐藏loading页
        };
        this.timer = Date.now();
        this.init(options);
    };
    //插件初始化
    Preload.prototype.init = function (options) {
        //配置参数合并
        this.options = $.extend(this.options, options);
        if (this.options.order) {
            this.ordered(); //有序加载
        } else {
            this.unordered(); //无序加载
        }
    };
    // 有序加载
    Preload.prototype.ordered = function () {
        var that = this,
            imgs = this.imgs,
            len = imgs.length,
            count = 0,
            options = this.options;
        load();

        function load() {
            var img = new Image();
            $(img).on('load error', function () {
                options.each && options.each(count);
                if (count >= len-1) {
                    //所有图片加载完毕,检查是否满足最小loading时间
                    var timerCount = Date.now() - that.timer;
                    if (timerCount < options.minTimer) {
                        console.log("111")
                        var timeout = options.minTimer - timerCount;
                        setTimeout(function () {
                            options.end && options.end();
                        }, timeout);
                    }else{
                        options.end && options.end();
                    }
                } else {
                    load();
                }
                count++

            });
            // onload函数要写在改变src前,这样确保了onload函数一定会被调用

            img.src = imgs[count];
        }
    };
    // 无序加载
    Preload.prototype.unordered = function () {
        var that = this,
            imgs = this.imgs,
            len = imgs.length,
            count = 0,
            options = this.options;
        for (var i = 0; i < len; i++) {
            var img = new Image();
            $(img).on('load error', function () {
                options.each && options.each(count);
                if (count >= len-1) {
                    //所有图片加载完毕,检查是否满足最小loading时间
                    var timerCount = Date.now() - that.timer;
                    if (timerCount < options.minTimer) {
                        var timeout = options.minTimer - timerCount;
                        setTimeout(function () {
                            options.end && options.end();
                        }, timeout);
                    }else{
                        options.end && options.end();
                    }
                }
                count++;
            });
            img.src = imgs[i];
        }
    };
    //扩展到jQuery对象上
    $.extend($,{
        preload: function (imgs, options) {
            new Preload(imgs, options);
        }
    });
})(jQuery);
$(function () {
    /*************************Audio Manager***********************************/
    /************************Begin***********************************/
    function AudiosManager() {
        this.dict = new Dictionary();
    }

// 添加
    AudiosManager.prototype.add = function(name,sound){
        // var audio = new Howl({
        //     src: [src],
        //     preload : true
        // });
        // var _name = '#' + name;
        // var audio = $(_name)[0];
        // $(_name).attr('src',src);

        // audio.play();
        // audio.pause();
        // var sound = createjs.Sound.registerSound({id:name, src:src});
        var myInstance = createjs.Sound.play(name);
        myInstance.paused = true;
        this.dict.set(name,myInstance);
    };

// 移除
    AudiosManager.prototype.remove = function (name) {
        this.dict.delete(name);
    };

// 获取音频
    AudiosManager.prototype.get = function (name) {
        return this.dict.get(name);
    };

// 判断是否为空
    AudiosManager.prototype.isEmpty = function () {
        return this.dict.size() === 0;
    };

// 播放音频
    AudiosManager.prototype.play = function (name) {
        if(this.dict.has(name)){
            var audio = this.dict.get(name);
            // audio.pause();
            // audio.play();
            // this.dict.get(name).play();
            createjs.Sound.play('empty');
            console.log("当前播放状态未:" + audio.playState )
            audio.play(name);
        }

    };

    AudiosManager.prototype.restart = function(name){
        if(this.dict.has(name)){
            var audio = this.dict.get(name);
            // audio.currentTime = 0;
            // audio.play();
            audio.position  = 0;
            audio.play(name);
        }
    };

    AudiosManager.prototype.pause = function (name) {
        if(this.dict.has(name)){
            var audio = this.dict.get(name);
            audio.paused = true;
            // createjs.Sound.pause(name);
            // console.log(createjs.Sound);
        }
    };

    AudiosManager.prototype.pasueAll = function () {
        if(this.dict.size() > 0 ){
            var items = this.dict.values();
            for(var i in items){
                items[i].pause();
            }
        }
    };

    AudiosManager.prototype.mute = function () {
        if(this.dict.size() > 0 ){
            var items = this.dict.values();
            for(var i in items){
                items[i].volume = 0;
            }
        }
    };

    AudiosManager.prototype.volume = function (vol) {
        if(this.dict.size() > 0 ){
            var items = this.dict.values();
            for(var i in items){
                items[i].volume = vol;
            }
        }
    };


    AudiosManager.prototype.setVolume = function (name,vol) {
        if(this.dict.size() > 0 ){
            this.dict.get(name).volume = vol;
            // var items = this.dict.values();
            // for(var i in items){
            //
            //     items[i].volume = vol;
            // }
        }
    };

    // 设置剩余循环，只播放一次为0，负数为无限循环
    AudiosManager.prototype.setLoop = function (name,loop) {
        var self = this;
        if(self.dict.has(name)){
            var audio = self.dict.get(name);
            audio.loop = loop;
        }
    };

    audioManager = new AudiosManager();

    /************************End***********************************/
        // Create.js
    var loader  = new createjs.LoadQueue(true,null,true);
    //create a LoadItem and set the crossOrigin property
    // var loadItem = new createjs.LoadItem().set({src:'http://lingann.oss-cn-beijing.aliyuncs.com/512/bgm01.mp3', crossOrigin:"Anonymous"});
    //load it
    // loader.loadFile(loadItem);

    // 添加声音支持
    loader .installPlugin(createjs.Sound);
    createjs.Sound.alternateExtensions = ["mp3"];
    // 添加背景音乐


    var manifest = [
        // {id:"bgm", src:"./music/bgm01.mp3"},
        {id:"bgm", src:"https://lingann.oss-cn-beijing.aliyuncs.com/618/bgm.mp3"},
        {id:"guide", src:"https://lingann.oss-cn-beijing.aliyuncs.com/618/guide.mp3"},
        {id:"empty", src:"./music/empty.mp3"}
    ];



    // 进行声音预加载
    loader.loadManifest(manifest);

    var _progress = $('#progress');

    var _gallery = $('#gallery');

    var fileloadCallback = function(e){
        console.log(e);
    };

    var progressCallback = function (event) {
        // console.log(event);
        var progress = Math.floor(event.progress * 100);
        if(progress <= 100){
            _progress.css('width',progress + '%');
        }

        console.log("加载中" + progress);
        if (progress === 100) {
            // console.log('all done');
            // document.querySelector('body').style.background = 'white'
        }
    };
    // 完成回调
    var completeCallback = function(){

        console.log();
        var bgm = loader.getResult("bgm");
        var guide = loader.getResult("guide");
        var empty = loader.getResult("empty");

        audioManager.add('bgm',bgm);
        audioManager.add('guide',guide);
        audioManager.add('empty',empty);

        krpano.onReady = function(){
            // krpano.setView(planetView);
            krpano.base.call("plantview");
            // krpano.setView(planetView);
        };
        krpano.render({},function () {
            // krpano.getView();
            // alert('加载完成')
            // preloadImages();
        });
        $('.progress-container').animate({opacity: '0'},'slow',function () {
            $(this).hide();
        });

        $('#mask').animate({opacity: '0'},'slow',function () {
            // $(this).hide();
            $('.go').show();
            krpano.hideSkin();
        });



    };

    // 添加回调
    loader.addEventListener('fileload',fileloadCallback);
    loader.addEventListener("complete", completeCallback);
    loader.addEventListener("progress",progressCallback);

    /*************************基本方法*********************************/
    function preloadImages() {
        var images = [];
        // var _loader = new createjs.LoadQueue();
        // 预加载
        for(var i in actions){
            if(actions[i].type === "playAudio"){
                // manager.add(actions[i].name,actions[i].value)
            }
            if(actions[i].type === "showImage"){
                images.push("https://lingann.oss-cn-beijing.aliyuncs.com/512/" + actions[i].value);
            }
            if(actions[i].type === "playVideo"){
                // preloadVideo(actions[i].value);
            }
        }
        // 进行声音预加载
        $.preload(images);
    }



    /*****************************************************************/

    // 初始化
    function getTimeline(actions){
        var timeline = new Queue();
        var lastTimeAction = null;
        for(var i in actions){
            var timeAction = {
                duration: 0,
                actions: []
            };
            if(i <= 0){
                timeAction.duration = actions[i].time * 10;
                timeAction.actions.push(actions[i]);
                timeline.enqueue(timeAction);
            }else{
                if(actions[i].time!== actions[i-1].time){
                    timeAction.duration = (actions[i].time - actions[i-1].time) * 10;
                    timeAction.actions.push(actions[i]);
                    timeline.enqueue(timeAction);}
                else {
                    lastTimeAction.actions.push(actions[i]);
                }

            }
            lastTimeAction = timeAction;
        }
        console.log(timeline);
        return timeline;
    }

    // 执行时间线
    function executeTimeline(timeline){
        var timer = new easytimer.Timer();
        var time = 0;
        if(!timeline.isEmpty()){
            timer.start({
                precision: 'secondTenths',
                startValues: {secondTenths: 0},
                target: {secondTenths: timeline.peek().duration}
            });
            timer.addEventListener('targetAchieved', function (e) {
                var timeAction = timeline.dequeue();
                for(var i in timeAction.actions){
                    executeAction(timeAction.actions[i]);
                }
                if(!timeline.isEmpty()){
                    timer.start({
                        precision: 'secondTenths',
                        startValues: {secondTenths: 0},
                        target: {secondTenths: timeline.peek().duration}
                    });
                }
            });
            timer.addEventListener('secondsUpdated',function (e) {
                time += 1;
                console.log(time);
            });
            timer.addEventListener('secondTenthsUpdated',function (e) {
                // time += 1;
                // console.log(time);
                // console.log(timer.getTotalTimeValues())
                // console.log(2);
            })
        }
        return timer;
    }

    // 执行事件
    function executeAction(action){
        console.log("执行动作");
        switch (action.type) {
            case 'showImage':
                showImage(action);
                console.log("打开图片");
                break;
            case 'hideImage':
                hideImage();
                console.log("关闭图片");
                break;
            case 'playAudio':
                console.log("播放音频");
                playAudio(action);
                break;
            case 'stopAudio':
                console.log("暂停音频");
                stopAudio(action);
                break;
            case 'playVideo':
                playVideo(action);
                console.log("播放视频");
                break;
            case 'stopVideo':
                stopVideo(action);
                console.log("暂停视频");
                break;
            case  'log':
                console.log(action.value);
                break;
            case 'loadScene' :
                console.log('加载场景');
                krpano.loadSceneByName(action.value);
                break;
            case 'restart' :
                restart();
                break;
        }
    }

    /*************************Action 事件*******************************/
    // 弹出图片
    function showImage(action){
        var pop = $('#popImage1');
        var url = "https://lingann.oss-cn-beijing.aliyuncs.com/512/" + action.value;
        $('#popImage1 .content').attr('src',url);
        pop.show();
        // $('#popImage1').animate({opacity: '1'});
        $('#popImage1').animate({
            left: '30%',
            opacity: '1'
        },1500,'linear');

        // if(document.body.clientWidth > 600){
        //     // pop.css('top',action.yPos);
        //     // pop.css('left',action.xPos);
        // }
    }

    // 关闭图片
    function hideImage(action){
        $('#popImage1').animate({opacity: '0'},'fast',function () {
            $(this).hide();
            $(this).css('left','80%');
        })
    }

    // 播放音频
    function playAudio(action){
        audioManager.play(action.name);
    }

    // 暂停播放音频
    function stopAudio(action){
        audioManager.stop(action.value);
    }

    // 播放视频
    function playVideo(action){
        var pop = $('#popVideo');
        pop.show();
        var url = "https://lingann.oss-cn-beijing.aliyuncs.com/512/" + action.value;
        // $('#popImage1').animate({opacity: '1'});
        $('#popVideo video').attr('src',url);
        $('#popVideo video').trigger('play');
        $('#popVideo video').get(0).play();
        pop.animate({opacity: '1'},'slow',function () {
            //
        });
        // $('#popImage1 .content').attr('src',action.value);
        // if(document.body.clientWidth > 600){
        //     // pop.css('top',action.yPos);
        //     // pop.css('left',action.xPos);
        // }
    }

    // 暂停播放视频
    function stopVideo(action){
        var pop = $('#popVideo');
        $('#popVideo video').trigger('stop');
        pop.animate({opacity: '0'},'slow',function () {
            pop.hide();
        });
    }

    // 重新开始
    function restart() {
        krpano.loadScene({name: 'scene_001'});
        timer.pause();  // 时间暂停
        hideImage();    // 关闭当前显示的图片
        stopVideo();    // 关闭当前显示的视频
        krpano.base.call("plantview");
        krpano.normalView();
        // currentTimeline = getTimeline(actions);
        // timer = executeTimeline(currentTimeline);
        audioManager.restart('bgm');
        manager.restart('guide');
        krpano.hideSkin();
    }

    /******************事件操作**************************/
    var timer = null;
    var isAutoRotate = true;
    var currentTimeline = null;
    var isMute = false;
    $('#mask').click(function () {
        // 音频准备就绪才能播放
        krpano.hideSkin();  // 隐藏皮肤
        console.log("关闭蒙版");
        // media.play();
        $(this).hide();
        $('.go').hide();
        $('#autoView').addClass('active');
        krpano.normalView();
        // krpano.setView(planetView);
        // restart();
        krpano.base.call("startautorotate");
        $('#title').animate({opacity: '0'},'slow',function () {
            $(this).hide();
            // currentTimeline = getTimeline(actions);
            // timer = executeTimeline(currentTimeline);
            audioManager.play('bgm');

            audioManager.play('guide');
            audioManager.setLoop('bgm',-1);
            // audioManager.setLoop('bgm',-1);
            // audioManager.setVolume('bgm',0.5);
        })
    });

    $('#freeView').click(function () {
        // if(timer!==null){
        //     timer.pause();  // 时间暂停
        //     hideImage();    // 关闭当前显示的图片
        //     stopVideo();    // 关闭当前显示的视频
        //     audioManager.pause('guide');
        //     krpano.showSkin();
        //     $(this).addClass('active');
        //     $('#autoView').removeClass('active');
        // }
        layerManager.info();
    });

    $('#autoView').click(function () {
        if(timer!==null){
            timer.start();
            audioManager.play('guide'); // 继续播放音频
            krpano.hideSkin();
            $(this).addClass('active');
            $('#freeView').removeClass('active')
        }
    });

    // 控制自动旋转
    $('#autoRotate').click(function () {
        if(isAutoRotate){
            krpano.stopAutoRotate();
            isAutoRotate = false;
        }else {
            krpano.startAutoRotate();
            isAutoRotate = true;
        }
    });

    $('#restart').click(function () {
        // restart();
        // $('#freeView').removeClass('active')
        // $('#autoView').addClass('active');
        // $(this).removeClass('active');
        if(isAutoRotate){
            krpano.stopAutoRotate();
            isAutoRotate = false;
        }else {
            krpano.startAutoRotate();
            isAutoRotate = true;
        }
    });

    $('#volume').click(function () {
        if(isMute){
            audioManager.volume(1);
            $('#volume div').removeClass('mute');
            isMute = false;
        }else {
            audioManager.mute();
            $('#volume div').addClass('mute');
            isMute = true;
        }
    })
});


