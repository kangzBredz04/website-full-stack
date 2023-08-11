package com.example.backend.controller;

import com.example.backend.model.Jersey;
import com.example.backend.service.JerseyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class JerseyController {
    @Autowired
    private JerseyService jerseyService;
    @RequestMapping("/jersey")
    public List<Jersey> allJersey(){
        return jerseyService.getAllJerseyList();
    }
}
