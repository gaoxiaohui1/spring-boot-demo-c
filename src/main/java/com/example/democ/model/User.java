package com.example.democ.model;

public class User {
    private String name;
    private String gender;
    private Integer age;
    public void setName(String name) {
        this.name=name;
    }
    public String getName() {
        return this.name;
    }
    public void setGender(String gender) {
        this.gender=gender;
    }
    public String getGender() {
        return this.gender;
    }
    public void setAge(Integer age) {
        this.age=age;
    }
    public Integer getAge() {
        return this.age;
    }
    public User() {
    }
    public User(String name,String gender,Integer age) {
        this.name=name;
        this.gender=gender;
        this.age=age;
    }
}
