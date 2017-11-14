(function ($, root, vfFuncName) {

    var settings = {
        add: '',// 新增按钮
        btn: '',// 搜索按钮
        frm: '',// 搜索form
        div: '',// data所在div
    };

    // 获取列表
    function getData(page) {
        var data = settings.frm.serialize();
        data += "&pageSize=10&page=" + page;
        $.ajax({
            url: "/listData",
            data: data,
            type: "get",
            success: function (data) {
                settings.div.html(data)
                getPageStuff(page);
                bindSave();
                bindUpdate();
            }
        });
    }

    // 获取分页数据
    function getPageStuff(page) {
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

    // 新增数据
    function addData() {
        $('#tfoot').html('<td>-1</td><td><input type="text"/></td>\n' +
            '        <td><input type="text"/></td>\n' +
            '        <td><input type="text"/></td>\n' +
            '        <td><input type="text"/></td>\n' +
            '        <td>\n' +
            '            <button class="save">保存</button>\n' +
            '            <button class="delete">删除</button>\n' +
            '        </td>');
        bindSave();
        bindDelete();
    }

    // 删除新增数据
    function deleteData() {
        $('#tfoot').html('');
    }

    // 修改数据
    function updateData(obj) {
        var $tr = $(obj).parent().parent();
        $tr.find('td').each(function (index) {
            if (index > 0) {
                $(this).html('<input type="text" />');
            }
            if (index == $tr.find('td').length - 1) {
                $(this).html('<button class="save">保存</button><button class="cancel">撤销</button>');
            }
        });
        bindSave();
        bindCancel();
    }

    // 绑定保存按钮
    function bindSave() {
        settings.div.find('.save').each(function () {
            $(this).bind('click', function () {
                saveData(this);
            })
        });
    }

    // 绑定取消按钮
    function bindCancel() {
        settings.div.find('.cancel').each(function () {
            $(this).bind('click', function () {
                cancelData();
            })
        });
    }

    // 绑定修改按钮
    function bindUpdate() {
        settings.div.find('.update').each(function () {
            $(this).bind('click', function () {
                updateData(this);
            })
        });
    }

    // 绑定删除按钮
    function bindDelete() {
        settings.div.find('.delete').each(function () {
            $(this).bind('click', function () {
                deleteData();
            })
        });
    }

    // 保存数据
    function saveData(obj) {
        var user = {};
        var $tr = $(obj).parent().parent();
        user.id = parseInt($.trim($tr.find('td:eq(0)').text()));
        user.name = $.trim($tr.find('input:eq(0)').val());
        user.gender = $.trim($tr.find('input:eq(1)').val());
        user.age = $.trim($tr.find('input:eq(2)').val());
        user.height = $.trim($tr.find('input:eq(3)').val());
        var url = '/add';
        if (user.id != -1) {
            url = '/update';
        }
        $.ajax({
            url: url,
            data: user,
            type: "post",
            success: function (data) {
                alert(data);
                getData(1);
            }
        });
    }

    // 取消修改数据
    function cancelData() {
        getData(1);
    }

    // 初始化
    function init() {
        getData(1);
        settings.add.unbind();
        settings.add.bind("click", function () {
            addData();
        });
        settings.btn.unbind();
        settings.btn.bind('click', function () {
            getData(1);
        });
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