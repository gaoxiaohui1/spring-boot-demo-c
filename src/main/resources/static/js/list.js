(function ($, root, vfFuncName) {

    var settings = {
        btn: '',
        frm: '',
        div: '',
    };

    function getData(page) {
        let data = settings.frm.serialize();
        data += "&page=" + page;
        $.ajax({
            url: "/listData",
            data: data,
            type: "get",
            success: function (data) {
                settings.div.html(data)
                const totalCount = $('#totalCount').val();
                $("#pageDiv").createPage({
                    totalCount: totalCount,
                    current: page,
                    pageSize: 6,
                    backFn: function (p) {
                        getData(p);
                    }
                });
            }
        });
    }

    function init() {
        settings.btn.unbind();
        settings.btn.bind('click', function () {
            getData(1);
        });
        getData(1);
    }

    var Public = {
        init: init,
    }

    var vfFunc = function (options) {
        $.extend(settings, options);
    };

    $.extend(vfFunc.prototype, Public, {constructor: vfFunc});
    root[vfFuncName] = vfFunc;

})(jQuery, window, "d_c_list");