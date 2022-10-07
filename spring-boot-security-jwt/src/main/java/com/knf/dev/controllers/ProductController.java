package com.knf.dev.controllers;

import com.knf.dev.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.persistence.Id;
import java.util.List;
@RestController
@CrossOrigin(origins="http://localhost:3000/")
@RequestMapping("api/auth")
public class ProductController {
    @Autowired
    private ProductService service;
    public ProductController(ProductService service) {
        this.service = service;
    }
    @GetMapping("/product_details")
    public List<Product> List()
    {
        return service.getProductList();
    }
    @GetMapping("/{id}")
    public Product productbyid(@PathVariable long id)
    {
        return service.productbyid(id);
    }

    @GetMapping("deleteId/{id}")
    public void deletebyId(@PathVariable("id") long id) {

        service.deletebyid(id);
    }
    @PostMapping("/insert_product")
    public void insert(@RequestBody Product data)
    {

        service.addProduct(data);
    }
    @PutMapping("update/{id}")
    public Product updatebyId(@PathVariable Long id,@RequestBody Product entry)

    {
        return service.updatebyid(id,entry);
    }



}

