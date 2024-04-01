package com.arun.tradescreen.entity;

 
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "trade_details")
public class Trade {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String stockName;
    private double listingPrice;
    private int quantity;
    private String type; // buy or sell
    private double pricePerUnit;
    
//    @OneToMany(mappedBy = "trade")
//    private List<Order> orders;

    // Constructors, getters, setters
}
