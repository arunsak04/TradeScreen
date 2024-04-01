package com.arun.tradescreen.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "order_master")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String stockName;
    private int quantity;
    private double pricePerUnit;
    private String type; // buy or sell
    private String status; // created, confirmed, etc.

    @ManyToOne
    @JoinColumn(name = "trade_id")
    private Trade trade;

    // Constructors, getters, setters
}

