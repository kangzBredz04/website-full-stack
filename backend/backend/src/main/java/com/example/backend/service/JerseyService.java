package com.example.backend.service;

import com.example.backend.model.Jersey;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class JerseyService {
    private List<Jersey> jerseyList = new ArrayList<>(Arrays.asList(
            new Jersey("1", "Jersey Bola 1", 100000, 20, "https://i.pinimg.com/564x/83/b1/77/83b17776d5cfdfa2db5c3412b54e6d5f.jpg"),
            new Jersey("2", "Jersey Bola 2", 150000, 10, "https://i.pinimg.com/564x/44/08/62/44086220650a8880c8c9b27450dbbdd5.jpg"),
            new Jersey("3", "Jersey Bola 3", 190000, 25, "https://i.pinimg.com/564x/b0/43/d2/b043d277d5f059ed011d3fa7186a7df0.jpg"),
            new Jersey("4", "Jersey Bola 4", 200000, 15, "https://i.pinimg.com/564x/d7/9d/78/d79d78151aae2e35b098ad671c5861bb.jpg"),
            new Jersey("5", "Jersey Bola 5", 250000, 5, "https://i.pinimg.com/564x/31/53/05/3153059c361f6b19badaeecf6ca2b8c6.jpg"),
            new Jersey("3", "Jersey Bola 6", 190000, 25, "https://i.pinimg.com/564x/b0/43/d2/b043d277d5f059ed011d3fa7186a7df0.jpg"),
            new Jersey("1", "Jersey Bola 7", 100000, 20, "https://i.pinimg.com/564x/83/b1/77/83b17776d5cfdfa2db5c3412b54e6d5f.jpg"),
            new Jersey("2", "Jersey Bola 8", 150000, 10, "https://i.pinimg.com/564x/44/08/62/44086220650a8880c8c9b27450dbbdd5.jpg")
    ));
    public List<Jersey> getAllJerseyList(){
        return jerseyList;
    }
}
