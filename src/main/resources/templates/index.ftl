<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>c</title>
    <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.js"></script>
</head>
<body>


<div id="search">


</div>
<div>
    <ul>
        <li>message:${message}</li>
        <li>
            <button type="button" onclick="getSearch();" >btn1</button>
        </li>
        <li>
            <button type="button" onclick="getData();" >btn2</button>
        </li>
    </ul>

</div>

<div id="data">

</div>

<script>
    function getSearch(){
        $.ajax({
            url: "/c/s",
            type: "get",
            async: true,
            success: function (data) {
                $('#search').html(data);
            },
            error: function (result) {

            }
        });
    }
    function getData(){
        $.ajax({
            url: "/c/d",
            type: "get",
            async: true,
            success: function (data) {
                $('#data').html(data);
            },
            error: function (result) {

            }
        });
    }
</script>
</body>
</html>