window.addEventListener('load', function () {
    // 利用新增数组方法操作数据
    var data = [{
        id: 1,
        pname: '小米',
        price: 3999
    }, {
        id: 2,
        pname: 'oppo',
        price: 999
    }, {
        id: 3,
        pname: '荣耀',
        price: 1299
    }, {
        id: 4,
        pname: '华为',
        price: 1999
    }, ];

    var tbody = document.querySelector('tbody');
    var search_price = document.querySelector('.search-price');
    var start = document.querySelector('.start');
    var end = document.querySelector('.end');
    var search_pro = document.querySelector('.search-pro');
    var product = document.querySelector('.product');

    setdata(data);
    // 遍历一遍数组，并对界面进行渲染
    function setdata(mydata) {
        mydata.forEach(function (value) {
            var tr = document.createElement('tr');
            tr.innerHTML = '<td>' + value.id + '</td><td>' + value.pname + '</td><td>' + value.price + '</td>';
            tbody.appendChild(tr);
        });
    }
    // 按照价格查询 搜索按钮事件
    search_price.addEventListener('click', function () {
        tbody.innerText = '';
        var newdata = data.filter(function (value) {
            return value.price >= start.value && value.price <= end.value;
        });
        setdata(newdata);
    });
    // 按照名称查询 抖索按钮事件
    search_pro.addEventListener('click', function () {
        tbody.innerHTML = '';
        var newdata = data.filter(function (value) {
            return value.pname == product.value;
        })
        setdata(newdata);
    })
})