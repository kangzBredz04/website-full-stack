package com.example.backend.model;

public class Jersey {
    private String id;
    private String name;
    private Integer price;
    private Integer stock;
    private String urlGambar;
    public Jersey(String id, String name, Integer price, Integer stock, String urlGambar){
        this.id = id;
        this.name= name;
        this.price= price;
        this.stock = stock;
        this.urlGambar = urlGambar;
    }
//    Getter
    public String getId(){
        return id;
    }
    public  String getName(){
        return name;
    }
    public Integer getPrice(){
        return price;
    }
    public Integer getStock(){
        return stock;
    }
    public  String getUrlGambar(){
        return urlGambar;
    }
//    Setter
    public void setId(String id){
        this.id = id;
    }
    public void setName(String name){
        this.name = name;
    }
    public void setPrice(Integer price){
        this.price = price;
    }
    public void setStock(Integer stock){
        this.stock = stock;
    }
    public void setUrlGambar(String urlGambar){
        this.urlGambar = urlGambar;
    }
}
