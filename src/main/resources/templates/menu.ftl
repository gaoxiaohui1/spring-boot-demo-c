<div id="menu">
    this is menu div --include
</div>
<script src="/js/menu.js"></script>
<script>
    $(function () {
        var menu = new d_c_menu({div: $("#menu")});
        menu.init();
    })
</script>