package com.example.democ.service;

import com.example.democ.dao.UserDAO;
import com.example.democ.model.Search;
import com.example.democ.model.User;
import com.example.democ.model.UserListResult;
import feign.Feign;
import feign.gson.GsonDecoder;
import feign.gson.GsonEncoder;
import org.springframework.stereotype.Service;


@Service
public class UserService {

    private UserDAO userDAO = Feign.builder().encoder(new GsonEncoder()).decoder(new GsonDecoder())
            .target(UserDAO.class, "http://127.0.0.1:8081");

    /**
     * 获取单个User
     *
     * @param id
     * @return
     */
    public User getSingleUser(Integer id) {
        User res = userDAO.getSingleUser(id);
        return res;
    }

    /**
     * 获取多个Users
     *
     * @param search
     * @return
     */
    public UserListResult getUsers(Search search) {
        UserListResult res = userDAO.getUsers(search);
        return res;
    }

    /**
     * 新增User
     *
     * @param user
     * @return
     */
    public User addUser(User user) {
        User res = userDAO.addUser(user);
        return res;
    }

    /**
     * 修改User
     *
     * @param user
     * @return
     */
    public User updateUser(User user) {
        User res = userDAO.updateUser(user);
        return res;
    }

    /**
     * 删除User
     *
     * @param id
     * @return
     */
    public User deleteUser(Integer id) {
        System.out.println(id);
        return new User();
    }
}
