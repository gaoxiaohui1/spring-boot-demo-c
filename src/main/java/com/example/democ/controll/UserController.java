package com.example.democ.controll;

import com.example.democ.model.Menu;
import com.example.democ.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;

@Controller
public class UserController {

    @Autowired
    private UserService us;

    @GetMapping(value = "/i")
    public String index(ModelMap model) {
        model.put("message", "this is message");
        return "index";
    }

    @GetMapping(value = "/s")
    public String search(ModelMap model) {
        model.put("message", "this is message");
        return "search";
    }

    @GetMapping(value = "/d")
    public String data(ModelMap model) {
        model.put("message", "this is message");
        return "data";
    }

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
}
