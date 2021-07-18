window.addEventListener('load', function () {
    var lis = document.querySelector('ul').querySelectorAll('li');
    for (var i = 0; i < lis.length; i++) {
        (function (tempi) {
            lis[i].addEventListener('click', function () {
                setTimeout(function () {
                    console.log(lis[tempi].innerHTML);
                }, 000);
            })
            // lis[i].onclick = function () {
            //     console.log(tempi);
            // }
        })(i)
    }
    for (var i = 0; i < lis.length; i++) {
        (function (tempi) {

            setTimeout(function () {
                console.log(lis[tempi].innerHTML);
            }, 3000);

            // lis[i].onclick = function () {
            //     console.log(tempi);
            // }
        })(i)
    }
    // 计算车费问题
    var car = (function () {
        var start = 13;
        var total = 0;
        return {
            price: function (n) {
                if (n <= 3) {
                    total = start;
                } else {
                    total = start + (n - 3) * 5;
                }
                return total;
            },
            yd: function (flag) {
                return flag ? total + 10 : total;
            }
        }
    })()

    console.log(car.price(10)); //48
    console.log(car.yd(true)); //58


    // 递归
    function jc(n) {
        if (n == 1) {
            return 1;
        }
        return n * jc(n - 1);
    }
    console.log(jc(4)); //4! == 24

    function dg(n) {
        if (n == 1 || n == 2) {
            return 1;
        }
        return dg(n - 1) + dg(n - 2);
    }
    console.log(dg(9)); // 1+1+2+3+5+8+13+21 == 34

    var data = [{
        id: 1,
        name: '家电',
        goods: [{
            id: 11,
            gname: '冰箱'
        }, {
            id: 12,
            gname: '洗衣机'
        }]
    }, {
        id: 2,
        name: '服饰'
    }];

    var o = {};

    function getId(json, id) {
        json.forEach(function (item) {
            if (item.id == id) {
                // console.log(item);
                o = item;
            } else if (item.goods && item.goods.length > 0) {
                getId(item.goods, id);
            }
        })
        return o;
    }
    console.log(getId(data, 12));
})