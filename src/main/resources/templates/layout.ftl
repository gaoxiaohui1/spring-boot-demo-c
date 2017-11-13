<#compress>
    <#macro layout title js=[] css=[]>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <title>${title}</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.js"></script>
    <body>
    <div style="border: red;height: 100px;width: 1000px;background-color: aqua;">
        this is header
        <#include "head.ftl">
    </div>

    <div style="border: red;height: auto;width: 1000px;background-color:beige;">
        <div style="width: 200px;float: left;background-color:greenyellow;">
            this is menu
            <#include "menu.ftl">
        </div>
        <div style="width: 800px;float: right;background-color:gold;">
            <div class="page-content">
                this is content
                <#nested >
            </div>
        </div>
    </div>
    <div style="border: red;height: 100px;width: 1000px;background-color: aqua;float: left;">
        this is footer
        <#include "foot.ftl">
    </div>

    </body>
    </html>
    </#macro>
</#compress>