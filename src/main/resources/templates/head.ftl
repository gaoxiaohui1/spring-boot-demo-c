
<link type="text/css" rel="stylesheet" href="/css/head.css"/>
<div id="header">
    <div id="headerInfo" style="float: right">
        this is header div --include
    </div>
    <input id="name" type="text" value="test"/>
    <button id="btn">new head</button>
</div>
<script src="/js/head.js"></script>
<script>
    $(function () {
        var head = new d_c_head({input: $("#name"), btn: $("#btn"), div: $("#headerInfo")});
        head.init();
    })
</script>