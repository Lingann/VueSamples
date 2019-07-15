function Queue() {
    this.elements = [];
}

// 入列
Queue.prototype.enqueue = function (e) {
    this.elements.push(e);
};

// 出列
Queue.prototype.dequeue = function () {
    return this.elements.shift();
};

// 判断为空
Queue.prototype.isEmpty = function () {
    return this.elements.length === 0;
};

// 取首
Queue.prototype.peek = function () {
    return !this.isEmpty() ? this.elements[0] : undefined;
};

// 取末
Queue.prototype.tail = function () {
    return !this.isEmpty()? this.elements.pop() : undefined;
};

//字典数据结构
function Dictionary(){
    this.items = {};
    //检查是否有某一个键
    this.has = function(key){
        return this.items.hasOwnProperty(key);
    };
    //为字典添加某一个值
    this.set = function(key,val){
        this.items[key] = val;
    };
    //删除某一个键
    this.delete = function(key){
        if(this.has(key)){
            delete this.items[key];
            return true;
        }
        return false;
    };
    //查找某一特定项
    this.get = function(key){
        return this.has(key) ? this.items[key] : undefined;
    };
    //返回字典中的所有值
    this.values = function(){
        var res = [];
        for(var prop in this.items){
            if(this.has(prop)){
                res.push(this.items[prop]);
            }
        }
        return res;
    };
    //清空字典
    this.clear = function(){
        this.items = {};
    };
    //获取字典的长度
    this.size = function(){
        return Object.keys(this.items).length;
    };
    //获取字典所有的键
    this.keys = function(){
        return Object.keys(this.items);
    };
    //返回字典本身
    this.getItems = function(){
        return this.items;
    }
}



// 重小到大排序
function sort(arr) {
    var min;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (parseInt(arr[i]) > parseInt(arr[j])) {
                min = arr[j];
                arr[j] = arr[i];
                arr[i] = min;
            }
        }
    }
    return arr;
}

// 判断是否为数组
var isArray = function (arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
};
