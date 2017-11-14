package com.example.democ.dao;

import com.example.democ.model.Search;
import com.example.democ.model.User;
import com.example.democ.model.UserListResult;
import feign.Headers;
import feign.Param;
import feign.RequestLine;
import org.springframework.web.bind.annotation.RequestParam;


public interface UserDAO {
    @RequestLine("GET /user/{id}")
    User getSingleUser(@Param(value = "id") Integer id);

    @Headers({"Content-Type: application/json","Accept: application/json"})
    @RequestLine("GET /user/list")
    UserListResult getUsers(@RequestParam(value = "Search") Search search);

    @Headers({"Content-Type: application/json", "Accept: application/json"})
    @RequestLine("POST /user/add")
    User addUser(User user);

    @Headers({"Content-Type: application/json", "Accept: application/json"})
    @RequestLine("POST /user/update")
    User updateUser(User user);
}
