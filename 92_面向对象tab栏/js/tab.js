// var that;
class Tab {
    constructor(id) {
        // that = this;
        this.main = document.querySelector(id);
        this.add = this.main.querySelector('.tabadd');
        this.ul = this.main.querySelector('.firstnav ul');
        this.fsection = this.main.querySelector('.tabscon');
        this.init();
    }
    // 初始化函数
    init() {
        this.updataNode();
        this.add.onclick = this.addTab.bind(this.add, this);
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab.bind(this.lis[i], this);
            this.remove[i].onclick = this.removeTab.bind(this.remove[i], this);
            this.spans[i].ondblclick = this.editTab.bind(this.spans[i], this);
            this.sections[i].ondblclick = this.editTab.bind(this.sections[i], this);
        }
    }
    updataNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.spans = this.main.querySelectorAll('.firstnav li span:first-child');
    }
    // 切换标签
    toggleTab(that) {
        that.clearClass(that);
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }
    // 清楚类名
    clearClass(that) {
        for (var i = 0; i < that.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    // 增加标签
    addTab(that) {
        that.clearClass(that);
        var random = Math.random();
        var newli = '<li class="liactive"><span>新建标签</span><span class="iconfont icon-guanbi"></span></li>';
        var newsection = '<section class="conactive">测试1' + random + '</section>';
        that.ul.insertAdjacentHTML('beforeend', newli);
        that.fsection.insertAdjacentHTML('beforeend', newsection);
        that.init();
    }
    // 移除标签
    removeTab(that, e) {
        e.stopPropagation();
        var index = this.parentNode.index;
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        if (!document.querySelector('.liactive')) {
            index--;
            that.lis[index] && that.lis[index].click();
        }
    }
    // 修改标签
    editTab(that) {
        var str = this.innerHTML;
        window.getSelection ? window.getSelection().removeAllRanges() : document.getSelection.empty();
        this.innerHTML = '<input type="text">';
        var input = this.children[0];
        input.value = str;
        input.select();
        input.onblur = function () {
            this.parentNode.innerHTML = this.value;
        }
        input.onkeyup = function (e) {
            if (e.keyCode === 13) {
                this.blur();
            }
        }

    }
}
new Tab('#tab');