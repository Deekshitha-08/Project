package com.knf.dev.models;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.persistence.*;
import java.util.List;
@Entity
@Table(name="plants")
public class Product {
    private String product_name;
    private int price;
    private int quantity;
    private  String image;
    @Id
    @SequenceGenerator(name="person_sequence",
            sequenceName = "person_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.IDENTITY,
            generator = "person_sequence"
    )
    private long id;
    public Product(String product_name, String image,int price, long id, int quantity) {
        this.product_name = product_name;
        this.price = price;
        this.id = id;
        this.quantity = quantity;
        this.image= image;
    }

    public Product() {

    }


    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
