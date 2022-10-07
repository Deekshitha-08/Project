package com.knf.dev.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.*;
@Entity
@Table(name="cart_info")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String product_name;
    private int price;
    private String image;
    public Cart(){
        super();
    }


}