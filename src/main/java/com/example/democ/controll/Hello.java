package com.example.democ.controll;


import com.example.democ.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;



@Controller
@RequestMapping(value = "/c")
public class Hello {


    @Autowired
    private UserService us;

    @GetMapping(value = "/i")
    public String index(ModelMap model) {
        model.put("message","this is message");
        return "index";
    }

    @GetMapping(value = "/s")
    public String search(ModelMap model) {
        model.put("user",us.getUser());
        return "search";
    }

    @GetMapping(value = "/d")
    public String data(ModelMap model) {
        model.put("users",us.getUsers());
        return "data";
    }
}
