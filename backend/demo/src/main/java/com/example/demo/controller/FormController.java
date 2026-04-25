package com.example.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class FormController {

    @GetMapping("/")
    public String home() {
        return "Spring Boot Backend Running";
    }

    @PostMapping("/submit")
    public String submitForm(@RequestBody User user) {

        System.out.println("Name: " + user.getName());
        System.out.println("Email: " + user.getEmail());

        return "Form submitted successfully";
    }
}