"use strict";

import Vue from 'vue';
import * as Three from "three";
// import {Scene} from "three";
let ThreeJs = {};
let _three = Three;
    // {
    //     data: "数据"
    //     // createScene: function () {
    //     //     return new Three.Scene();
    //     // }
    //     // Scene:Scene
    //     // Camera : Three.Camera,
    //     // WebGLRenderer : Three.WebGLRenderer,
    //     // BoxGeometry : Three.BoxGeometry,
    //     // PerspectiveCamera : Three.PerspectiveCamera,
    //     // MeshBasicMaterial : Three.MeshBasicMaterial
    // };
ThreeJs.install = function (Vue,options) {
    Vue.Three = _three.data;
    window.Three = _three;
    Object.defineProperties(Vue.prototype,{
        Three: {
            get(){
                return _three
            }
        },
        $Three: {
            get(){
                return _three
            }
        }
    })
};
Vue.use(ThreeJs);

export default ThreeJs;
