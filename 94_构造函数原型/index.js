window.addEventListener('load', function () {
    // ···ES5创建对象的方式
    // 通过new Object() 创建一个对象
    var car = new Object()
    car.name = 'tesila';
    car.price = 1000;
    console.log(car);

    // 通过字面量创建一个对象
    var XJL = {
        name: '徐嘉乐',
        age: 21
    }
    console.log(XJL);

    // 通过构造函数创建一个对象， 虽然好用但会出现内存浪费的问题
    function People(name, age) {
        this.name = name; //这些都是实例对象
        this.age = age;
        this.sing = function () {
            console.log('我会唱歌');
        }
    }
    //利用原型prototype分配函数，可以共享方法
    // People.prototype.draw = function () {
    //     var who = this.name;
    //     console.log(who + '我还会画画');
    // }
    // 下面这个是用对象的方式
    People.prototype = {
        constructor: People,
        draw: function () {
            var who = this.name;
            console.log(who + '我还会画画');
        }
    }
    var xiaoming = new People('小明', 18);
    var xiaozhang = new People('小张', 17);
    xiaoming.name = '小明ming'
    console.log(xiaoming.name); //实例对象通过实例化对象访问
    People.color = 'yellow';
    console.log(People.color); //静态对象通过构造函数访问
    xiaoming.draw();
    xiaozhang.draw();
    // 每一个对象都有一个原型，每一个构造函数都有一个原型对象
    console.log(People.prototype === xiaoming.__proto__); //对象的原型和构造函数的原型对象是一个东西
    console.dir(People);

    Object.prototype.coder = 'xujiale'; //定义在Object构造函数的原型对象上
    console.log(xiaoming.coder);
    console.log(car.coder);

    // 练习使用call()
    xiaoming.draw.call(xiaozhang); //小明想说会画画，可偏偏让小张去说，没办法小张说的是他会画画

    // =========继承==========
    // ES5中的继承，利用一个新的对象，将子对象的prototype进行更改
    //创建了一个新儿子对象
    function Son(name, age) {
        People.call(this, name, age); //先把父亲的所有实例对象拿过来，并声称是儿子的实例对象
    };
    Son.prototype = new People(); //将它爹的一切全拿过来
    Son.prototype.constructor = Son; //更改temp的构造函数指向，变成自己的
    console.dir(Son);
    var xiaohong = new Son('小红', 15);
    console.log(xiaohong.name);
    // ======================
    
});