(function ($, root, vfFuncName) {

    var settings = {
        input: '',
        btn: '',//添加按钮
        div: '',//存放表格的容器
    };

    function getHead(type) {
        let name = settings.input.val()
        if (name == '') {
            name = 'test'
        }
        if (type == 1) {
            name = name.split("").reverse().join("")
        }
        $.ajax({
            url: "/head/" + name,
            type: "get",
            success: function (data) {
                settings.div.html(data)
            }
        });
    }

    function init() {
        settings.input.unbind();//先都解绑
        settings.input.bind('keyup', function () {
            getHead(0);
        });
        settings.btn.unbind();//先都解绑
        settings.btn.bind('click', function () {
            getHead(1);
        });
        getHead();
    }

    var Public = {
        init: init,
    }

    var vfFunc = function (options) {
        $.extend(settings, options);
    };

    $.extend(vfFunc.prototype, Public, {constructor: vfFunc});
    root[vfFuncName] = vfFunc;

})(jQuery, window, "d_c_head");