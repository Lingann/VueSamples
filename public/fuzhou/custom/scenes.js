var pano = {
    path : "",
    onEnter : null,
    onExit: null
};

var scene = {
    name : "",
    onEnter : null,
    onExit: null
};

var planetView = {
    stereographic : true,
    fisheye : 1.0,
    fov : 150,
    fovtype : 'VFOV',
    fovmax: 150,
    hlookat : -60,
    vlookat : 100,
    maxpixelzoom : 2.0
};

var test = [
    {
        time: 1,
        name: 'image01',
        type: 'showImage',
        value: './images/A8.jpg',
        xPos : 0,
        yPos: 0
    },
    {
        time: 3,
        name: "video",
        type: 'playVideo',
        value: './video/V1.mp4',
        xPos : 0,
        yPos: 0
    },
    {
        time: 5,
        name: 'image01',
        type: 'hideImage',
        value: 'image01',
        xPos : 0,
        yPos: 0
    },
    {
        time: 8,
        name: 'image01',
        type: 'showImage',
        value: './images/A8.jpg',
        xPos : 0,
        yPos: 0
    },
];

var actions = [
    {
        time: 3,
        name: "video",
        type: 'playVideo',
        value: 'V1.mp4',
        xPos : 0,
        yPos: 0
    },
    {
        time: 18,
        name: "scene",
        type: 'loadScene',
        value: 'scene_004',
        xPos : 0,
        yPos: 0
    },
    {
        time: 20,
        name: 'image01',
        type: 'showImage',
        value: 'A9.jpg',
        xPos : 0,
        yPos: 0
    },
    {
        time: 27,
        name: "video",
        type: 'stopVideo',
        value: 'video',
        xPos : 0,
        yPos: 0
    },
    {
        time: 28,
        name: 'image01',
        type: 'hideImage',
        value: 'image01',
        xPos : 0,
        yPos: 0
    },
    {
        time: 29,
        name: "scene",
        type: 'loadScene',
        value: 'scene_007',
        xPos : 0,
        yPos: 0
    },
    {
        time: 42,
        name: "scene",
        type: 'loadScene',
        value: 'scene_003',
        xPos : 0,
        yPos: 0
    },
    {
        time: 43,
        name: 'image01',
        type: 'showImage',
        value: 'A8.jpg',
        xPos : 0,
        yPos: 0
    },
    {
        time: 50,
        name: 'image01',
        type: 'hideImage',
        value: 'image01',
        xPos : 0,
        yPos: 0
    },
    {
        time: 60,
        name: "scene",
        type: 'loadScene',
        value: 'scene_007',
        xPos : 0,
        yPos: 0
    },
    {
        time: 61,
        name: "video",
        type: 'playVideo',
        value: 'V4.mp4',
        xPos : 0,
        yPos: 0
    },
    {
        time: 61,
        name: 'image01',
        type: 'showImage',
        value: 'A9.jpg',
        xPos : 0,
        yPos: 0
    },
    {
        time: 69,
        name: 'image01',
        type: 'hideImage',
        value: 'image01',
        xPos : 0,
        yPos: 0
    },
    {
        time: 72,
        name: "scene",
        type: 'loadScene',
        value: 'scene_008',
        xPos : 0,
        yPos: 0
    },
    {
        time: 73,
        name: 'image01',
        type: 'showImage',
        value: 'A13.jpg',
        xPos : 0,
        yPos: 0
    },
    {
        time: 98,
        name: 'image01',
        type: 'hideImage',
        value: 'image01',
        xPos : 0,
        yPos: 0
    },
    {
        time: 99,
        name: "scene",
        type: 'loadScene',
        value: 'scene_008',
        xPos : 0,
        yPos: 0
    },
    {
        time: 100,
        name: 'image01',
        type: 'showImage',
        value: 'A12.jpg',
        xPos : 0,
        yPos: 0
    },
    {
        time: 110,
        name: "video",
        type: 'stopVideo',
        value: 'video',
        xPos : 0,
        yPos: 0
    },
    {
        time: 115,
        name: 'image01',
        type: 'hideImage',
        value: 'image01',
        xPos : 0,
        yPos: 0
    },
    {
        time: 116,
        name: "scene",
        type: 'loadScene',
        value: 'scene_003',
        xPos : 0,
        yPos: 0
    },
    {
        time: 122,
        name: 'image01',
        type: 'showImage',
        value: 'A11.jpg',
        xPos : 0,
        yPos: 0
    },
    {
        time: 130,
        name: 'image01',
        type: 'hideImage',
        value: 'image01',
        xPos : 0,
        yPos: 0
    },
    {
        time: 133,
        name: 'image01',
        type: 'showImage',
        value: 'A15.jpg',
        xPos : 0,
        yPos: 0
    },
    {
        time: 144,
        name: 'image01',
        type: 'hideImage',
        value: 'image01',
        xPos : 0,
        yPos: 0
    },
    {
        time: 145,
        name: "scene",
        type: 'loadScene',
        value: 'scene_009',
        xPos : 0,
        yPos: 0
    },
    {
        time: 146,
        name: 'image01',
        type: 'showImage',
        value: 'A6.jpg',
        xPos : 0,
        yPos: 0
    },
    {
        time: 152,
        name: 'image01',
        type: 'hideImage',
        value: 'image01',
        xPos : 0,
        yPos: 0
    },
    {
        time: 167,
        name: 'image01',
        type: 'showImage',
        value: 'A7.jpg',
        xPos : 0,
        yPos: 0
    },
    {
        time: 170,
        name: "scene",
        type: 'loadScene',
        value: 'scene_004',
        xPos : 0,
        yPos: 0
    },
    {
        time: 175,
        name: 'image01',
        type: 'hideImage',
        value: 'image01',
        xPos : 0,
        yPos: 0
    },
    {
        time: 182,
        name: "video",
        type: 'playVideo',
        value: 'V3.mp4',
        xPos : 0,
        yPos: 0
    },
    {
        time: 184,
        name: "scene",
        type: 'loadScene',
        value: 'scene_007',
        xPos : 0,
        yPos: 0
    },
    {
        time: 185,
        name: 'image01',
        type: 'showImage',
        value: 'A9.jpg',
        xPos : 0,
        yPos: 0
    },
    {
        time: 190,
        name: 'image01',
        type: 'hideImage',
        value: 'image01',
        xPos : 0,
        yPos: 0
    },
    {
        time: 193,
        name: "scene",
        type: 'loadScene',
        value: 'scene_005',
        xPos : 0,
        yPos: 0
    },
    {
        time: 195,
        name: 'image01',
        type: 'showImage',
        value: 'A4.jpg',
        xPos : 0,
        yPos: 0
    },
    {
        time: 201,
        name: 'image01',
        type: 'hideImage',
        value: 'image01',
        xPos : 0,
        yPos: 0
    },
    {
        time: 202,
        name: "scene",
        type: 'loadScene',
        value: 'scene_001',
        xPos : 0,
        yPos: 0
    },
    {
        time: 205,
        name: "video",
        type: 'stopVideo',
        value: 'video',
        xPos : 0,
        yPos: 0
    },
    {
        time: 222,
        name: "scene",
        type: 'loadScene',
        value: 'scene_004',
        xPos : 0,
        yPos: 0
    },
    {
        time: 230,
        name: 'image01',
        type: 'showImage',
        value: 'A14.jpg',
        xPos : 0,
        yPos: 0
    },

    {
        time: 235,
        name: 'image01',
        type: 'hideImage',
        value: 'image01',
        xPos : 0,
        yPos: 0
    },
    {
        time: 238,
        name: "scene",
        type: 'loadScene',
        value: 'scene_010',
        xPos : 0,
        yPos: 0
    },
    {
        time: 240,
        name: 'image01',
        type: 'showImage',
        value: 'A1.jpg',
        xPos : 0,
        yPos: 0
    },
    {
        time: 245,
        name: 'image01',
        type: 'hideImage',
        value: 'image01',
        xPos : 0,
        yPos: 0
    },
    {
        time: 250,
        name: "scene",
        type: 'loadScene',
        value: 'scene_002',
        xPos : 0,
        yPos: 0
    },
    {
        time: 262,
        name: "scene",
        type: 'loadScene',
        value: 'scene_006',
        xPos : 0,
        yPos: 0
    },
    {
        time: 263,
        name: 'image01',
        type: 'showImage',
        value: 'A5.jpg',
        xPos : 0,
        yPos: 0
    },
    {
        time: 270,
        name: 'image01',
        type: 'hideImage',
        value: 'image01',
        xPos : 0,
        yPos: 0
    },
    {
        time: 278,
        name: "scene",
        type: 'loadScene',
        value: 'scene_011',
        xPos : 0,
        yPos: 0
    },
    {
        time: 285,
        name: "scene",
        type: 'loadScene',
        value: 'scene_012',
        xPos : 0,
        yPos: 0
    },
    {
        time: 286,
        name: 'image01',
        type: 'showImage',
        value: 'A2.jpg',
        xPos : 0,
        yPos: 0
    },
    {
        time: 290,
        name: 'image01',
        type: 'hideImage',
        value: 'image01',
        xPos : 0,
        yPos: 0
    },
    {
        time: 291,
        name: "scene",
        type: 'loadScene',
        value: 'scene_001',
        xPos : 0,
        yPos: 0
    },
    {
        time: 310,
        name: "timeline",
        type: 'restart',
        value: '',
        xPos : 0,
        yPos: 0
    }
];


var _actions = [
    {
        time: 3,
        name: 'image01',
        type: 'showImage',
        value: './images/1.jpg',
        xPos : 200,
        yPos: 400
    },
    {
        time: 6,
        name: "image02",
        type: 'hideImage',
        value: 'image01',   // hideImage 将会关闭name值为value的图片
        xPos : 0,
        yPos: 0
    },
    {
        time: 10,
        name: "image03",
        type: 'showImage',
        value: './images/8.jpg',
        xPos : 200,
        yPos: 400
    },
    {
        time: 13,
        name: "image04",
        type: 'hideImage',
        value: 'image03',   // hideImage 将会关闭name值为value的图片
        xPos : 0,
        yPos: 0
    },
    {
        time: 15,
        name: "video01",
        type: 'playVideo',
        value: '',
        xPos : 0,
        yPos: 0
    },
    {
        time: 18,
        name: "video02",
        type: 'stopVideo',
        value: 'video01',   // stopVideo 将会关闭name值为value的音频
        xPos : 0,
        yPos: 0
    },
    {
        time: 24,
        name: "log1",
        type: 'log',
        value: '你好',
        xPos : 0,
        yPos: 0
    },
    {
        time: 25,
        name: "scene1",
        type: 'loadScene',
        value: 'scene_004',
        xPos : 0,
        yPos: 0
    },
    {
        time: 27,
        name: "scene2",
        type: 'loadScene',
        value: 'scene_003',
        xPos : 0,
        yPos: 0
    },
    {
        time: 30,
        name: "scene3",
        type: 'loadScene',
        value: 'scene_002',
        xPos : 0,
        yPos: 0
    },
    {
        time: 600,
        name: "audio02",
        type: 'stopAudio',
        value: 'audio01',   // stopAudio 将会关闭name值为value的音频
        xPos : 0,
        yPos: 0
    }
];


