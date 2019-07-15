var layerManager = {
    msg: function (e) {
        //提示
        layer.open({
            content: e
            ,skin: 'msg'
            ,time: 2 //2秒后自动关闭
        });
    },
    info: function(content){
        layer.open({
            content: '2019年江西省安全宣传咨询日活动'
            ,style: 'background-color:#09C1FF; color:#fff; border:none;' //自定风格
            ,time: 3
        });
    },
    pop: function(src){
        var url = './iframes/'+ src+'.html';
        $.get(url,function (data) {
            layer.open({
                content: '<span class="close-btn" onclick="layer.closeAll();"></span>' + data
                , className: 'pop-iframe'
                , style: 'background-color:#09C1FF; color:#fff; border:none;' //自定风格
                , time: 3
            });
        })
    },
    iframe: function (src) {
        var url = './iframes/'+ src+'.html';//这里content是一个URL，如果你不想让iframe出现滚动条，你还可以content: ['http://sentsin.com', 'no']
        $.get(url,function (data) {
            layer.open({
                type: 1
                ,className: 'layer-iframe'
                ,content: data
                ,anim: 'up'
                ,style: 'position:fixed; bottom:0; left:0; width: 100%; height: 50%; padding:10px 0; border:none;color:#000000',
            });
        })

    },
    image : function(src,content){
        layer.open({
            className: 'layer-image'
            ,content: '<span class="close-btn" onclick="layer.closeAll();"></span><img src="'+src+'" width="100%"><p>'+content+'</p>'
            ,style: ''

            // ,time: 3
        });
    },
    video: function (videoSrc) {
        var index = layer.open({
            maxmin: true,
            className: 'layer-video'
            // closeBtn: 0,
            ,shadeClose: false
            ,content: '<span class="close-btn" onclick="layer.closeAll();audioResmueAll();"></span><video src="'+videoSrc+'" width="100%" controls="controls"></video>'
        });
        audioPauseAll();
        // audioManager.mute();
        // layer.full(index);
    }
};