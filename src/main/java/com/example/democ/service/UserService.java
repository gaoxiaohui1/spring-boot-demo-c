package com.example.democ.service;

import com.example.democ.model.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    /**
     * 获取单个User
     * @param id
     * @return
     */
    public User getSingleUser(Integer id) {
        System.out.println(id);
        return new User();
    }

    /**
     * 获取多个Users
     * @param list
     * @return
     */
    public List<User> getUsers(ArrayList<String> list) {
        System.out.println(list);
        return new ArrayList<User>();
    }

    /**
     * 新增User
     * @param user
     * @return
     */
    public User addUser(User user) {
        System.out.println(user);
        return new User();
    }

    /**
     * 修改User
     * @param user
     * @return
     */
    public User updateUser(User user) {
        System.out.println(user);
        return new User();
    }

    /**
     * 删除User
     * @param id
     * @return
     */
    public User deleteUser(Integer id) {
        System.out.println(id);
        return new User();
    }
}
