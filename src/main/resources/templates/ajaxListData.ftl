<div id="tableDiv">
    <table border="1px">
        <thead>
        <th style="width: 50px">ID</th>
        <th style="width: 50px">名字</th>
        <th style="width: 50px">性别</th>
        <th style="width: 50px">年龄</th>
        <th style="width: 50px">身高</th>
        <th style="width: 50px">操作</th>
        </thead>
        <tbody>
        <#list users as user>
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.gender}</td>
            <td>${user.age}</td>
            <td>${user.height}</td>
            <td>
                <button class="update">修改</button>
            </td>
        </tr>
        </#list>
        </tbody>
    </table>
    <input type="hidden" id="totalCount" value="${totalCount}"/>
</div>
<div id="pageDiv">

</div>