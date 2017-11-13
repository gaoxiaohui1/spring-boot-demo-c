<ul>
    <#list menus as menu>
        <li link="${menu.link}" menuid="${menu.id}" id="menu_${menu.id}" style="cursor: pointer">${menu.name}</li>
    </#list>
</ul>