package com.example.democ.controll;

import com.example.democ.model.Menu;
import com.example.democ.model.Search;
import com.example.democ.model.User;
import com.example.democ.model.UserListResult;
import com.example.democ.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class UserController {

    @Autowired
    private UserService us;

    @GetMapping(value = "/list/{id}")
    public String list(ModelMap model, @PathVariable(value = "id") Integer id) {
        model.put("msg", "this is list" + id);
        return "list";
    }

    @GetMapping(value = "head/{name}")
    public String head(ModelMap model, @PathVariable(value = "name") String name) {
        model.put("userName", name);
        return "realHead";
    }

    @GetMapping(value = "menu")
    public String menu(ModelMap model) {
        List<Menu> menus = new ArrayList<Menu>();
        for (int i = 0; i < 8; i++) {
            Menu menu = new Menu();
            menu.setId(i);
            menu.setLink("/list/" + i);
            menu.setName("列表_" + i);
            menus.add(menu);
        }
        model.put("menus", menus);
        return "realMenu";
    }

    @GetMapping(value = "listData")
    public String listData(ModelMap model, Search search, BindingResult bindingResult) {
        if (search.getPage() < 1) {
            search.setPage(1);
        }
        if (search.getPageSize() < 1) {
            search.setPageSize(10);
        }
        UserListResult result = us.getUsers(search);
        model.put("users", result.getUsers());
        model.put("totalCount", result.getTotalCount());
        return "ajaxListData";
    }


    @PostMapping(value = "add")
    @ResponseBody
    public String add(User user, BindingResult bindingResult) {
        User res = us.addUser(user);
        return "成功";
    }

    @PostMapping(value = "update")
    @ResponseBody
    public String update(User user, BindingResult bindingResult) {
        User res = us.updateUser(user);
        return "成功";
    }
}
