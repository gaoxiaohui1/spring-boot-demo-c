(function ($) {
    var ms = {
        init: function (obj, args) {
            return (function () {
                ms.fillHtml(obj, args);
                ms.bindEvent(obj, args);
            })();
        },
        //填充html
        fillHtml: function (obj, args) {
            return (function () {
                obj.empty();
                var totalPage = 1;
                if (args.totalCount > args.pageSize) {
                    totalPage = parseInt(args.totalCount / args.pageSize);
                    if (args.totalCount % args.pageSize > 0) {
                        totalPage += 1;
                    }
                }
                //上一页
                var isPrevAble = false;
                if (totalPage > 1 && args.current > 1) {
                    isPrevAble = true;
                }
                if (isPrevAble) {
                    obj.append('<button class="prevPageNumber">上一页</button>');
                } else {
                    obj.append('<button disabled>上一页</button>');
                }
                //中间页码
                if(totalPage<8) {
                    for(var i=1;i<=totalPage;i++) {
                        if(i==args.current) {
                            obj.append('<button disabled>' + i + '</button>');
                        }else {
                            obj.append('<button class="pageNumber">' + i + '</button>');
                        }
                    }
                }else {
                    var begin = 3;
                    var end = totalPage - 3;
                    if (args.current <= begin) {
                        for(var i=1;i<=begin+1;i++) {
                            if(i==args.current) {
                                obj.append('<button disabled>' + i + '</button>');
                            }else {
                                obj.append('<button class="pageNumber">' + i + '</button>');
                            }
                        }
                        obj.append('<span>...</span>');
                        obj.append('<button class="pageNumber">' + totalPage + '</button>');
                    } else if (args.current <= end) {
                        obj.append('<button class="pageNumber">' + 1 + '</button>');
                        obj.append('<span>...</span>');
                        for(var i=args.current-1;i<=args.current+1;i++) {
                            if(i==args.current) {
                                obj.append('<button disabled>' + i + '</button>');
                            }else {
                                obj.append('<button class="pageNumber">' + i + '</button>');
                            }
                        }
                        obj.append('<span>...</span>');
                        obj.append('<button class="pageNumber">' + totalPage + '</button>');
                    }else {
                        obj.append('<button disabled>' + 1 + '</button>');
                        obj.append('<span>...</span>');
                        for(var i=end;i<=totalPage;i++) {
                            if(i==args.current) {
                                obj.append('<button disabled>' + i + '</button>');
                            }else {
                                obj.append('<button class="pageNumber">' + i + '</button>');
                            }
                        }
                    }
                }
                //下一页
                var isNextAble = false;
                if (totalPage > 1 && args.current < totalPage) {
                    isNextAble = true;
                }
                if (isNextAble) {
                    obj.append('<button class="nextPageNumber">下一页</button>');
                } else {
                    obj.append('<button disabled>下一页</button>');
                }
            })();
        },
        //绑定事件
        bindEvent: function (obj, args) {
            return (function () {
                obj.on("click", "button.pageNumber", function () {
                    var current = parseInt($(this).text());
                    ms.fillHtml(obj, {"current": current, "pageSize": args.pageSize, "totalCount": args.totalCount});
                    if (typeof(args.backFn) == "function") {
                        args.backFn(current);
                    }
                });
                //上一页
                obj.on("click", "button.prevPageNumber", function () {
                    ms.fillHtml(obj, {
                        "current": args.current - 1,
                        "pageSize": args.pageSize,
                        "totalCount": args.totalCount
                    });
                    if (typeof(args.backFn) == "function") {
                        args.backFn(args.current - 1);
                    }
                });
                //下一页
                obj.on("click", "button.nextPageNumber", function () {
                    ms.fillHtml(obj, {
                        "current": args.current + 1,
                        "pageSize": args.pageSize,
                        "totalCount": args.totalCount
                    });
                    if (typeof(args.backFn) == "function") {
                        args.backFn(args.current + 1);
                    }
                });
            })();
        }
    }
    $.fn.createPage = function (options) {
        var args = $.extend({
            totalCount: 10,
            current: 1,
            pageSize: 10,
            backFn: function () {
            }
        }, options);
        ms.init(this, args);
    }
})(jQuery);