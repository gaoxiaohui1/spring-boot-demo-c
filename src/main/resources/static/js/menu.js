(function ($, root, vfFuncName) {

    var settings = {
        div: '',
    };

    function getMenu() {
        $.ajax({
            url: "/menu",
            type: "get",
            success: function (data) {
                settings.div.html(data)
                settings.div.find('li').each(function () {
                    const link = $(this).attr('link')
                    if (window.location.pathname.indexOf(link) == 0) {
                        $(this).css('background-color', 'red');
                    }
                    $(this).bind('click', function () {
                        window.location.href = link
                    })
                })
            }
        });
    }

    function init() {
        getMenu();
    }

    var Public = {
        init: init,
    }

    var vfFunc = function (options) {
        $.extend(settings, options);
    };

    $.extend(vfFunc.prototype, Public, {constructor: vfFunc});
    root[vfFuncName] = vfFunc;

})(jQuery, window, "d_c_menu");