window.addEventListener('load', function () {
    var obj = {
        id: 1,
        pname: '123',
        msg: {
            age: 18
        }
    }

    // 下面这个是原生浅拷贝
    var newobj = {};
    for (k in obj) {
        newobj[k] = obj[k];
    }
    // 浅拷贝除了第一级，更深层只传递地址
    newobj.id = 100;
    newobj.msg.age = 250;
    console.log(obj);
    console.log(newobj);

    // 语法糖浅拷贝
    var newobj2 = {};
    Object.assign(newobj2, obj);
    console.log(newobj2);

    // 原生深拷贝====================
    console.log('===================');
    var o = {};

    function deepCopy(newobj, oldobj) {
        for (k in oldobj) {
            var item = oldobj[k];
            if (item instanceof Array) {
                newobj[k] = [];
                deepCopy(newobj[k], item);
            } else if (item instanceof Object) {
                newobj[k] = {};
                deepCopy(newobj[k], item)
            } else {
                newobj[k] = item;
            }
        }
    }
    var obj22 = {};
    deepCopy(obj22,obj);
    obj22.msg.age=333;
    console.log(obj);
    console.log(obj22);
})