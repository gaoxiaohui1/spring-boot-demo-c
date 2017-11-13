<#include "layout.ftl">
<@layout title="list">
<div id="list">
${msg}
    <hr/>
    <div id="searchDiv">
        <form id="frm">
            <div style="float: left">
                <label>搜索类型</label>
                <select name="key">
                    <option value="0">全部</option>
                    <option value="1">性别</option>
                    <option value="2">年龄</option>
                </select>
            </div>
            <div style="float: left">
                <label>搜索值</label>
                <input type="text" name="value"/>
            </div>
            <div style="float: right">
                <button id="searchBtn">搜索</button>
            </div>
        </form>
    </div>
    <hr/>
    <div id="dataDiv">
    </div>
</div>
</@layout>
<link rel="stylesheet" type="text/css" href="/css/page.css"/>
<script src="/js/page.js"></script>
<script src="/js/list.js"></script>
<script>
    $(function () {
        var list = new d_c_list({btn: $("#searchBtn"),frm: $("#frm"), div: $("#dataDiv")});
        list.init();
    })
</script>