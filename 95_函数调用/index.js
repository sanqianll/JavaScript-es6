window.addEventListener('load', function () {
    class Car {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
        drive() {
            console.log(this);
            console.log('能开车');
        }
    }
    var p7 = new Car('小鹏P7', 3000);
    p7.drive.apply(window);

    var btn = document.querySelectorAll('button');
    for (var i = 0; i < btn.length; i++) {
        btn[i].onclick = function () {
            this.disabled = true;
            // setTimeout(function () {
            //     this.disabled = false;
            // }.bind(this), 3000);
            
            // 下面这个是箭头函数
            setTimeout(() => {
                this.disabled = false;
            }, 3000);
        }
    }

})