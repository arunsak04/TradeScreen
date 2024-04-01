package com.arun.tradescreen.controller;
 
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
 

import com.arun.tradescreen.entity.Order;
import com.arun.tradescreen.repository.OrderRepository;
import com.arun.tradescreen.repository.TradeRepository;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private TradeRepository tradeRepository;

    // Create
    @PostMapping("/{tradeId}")
    public Order createOrder(@PathVariable Long tradeId, @RequestBody Order order) {
        return tradeRepository.findById(tradeId)
                .map(trade -> {
                    order.setTrade(trade);
                    return orderRepository.save(order);
                })
                .orElseThrow(() -> new RuntimeException("Trade not found with id " + tradeId));
    }

    // Read All
    @CrossOrigin(origins = "http://localhost:3000/orderListing")
    @GetMapping
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    // Read One
    @GetMapping("/{id}")
    public Optional<Order> getOrderById(@PathVariable Long id) {
        return orderRepository.findById(id);
    }

    // Update
    @PutMapping("/{id}")
    public Order updateOrder(@PathVariable Long id, @RequestBody Order updatedOrder) {
        return orderRepository.findById(id)
                .map(order -> {
                    order.setStockName(updatedOrder.getStockName());
                    order.setQuantity(updatedOrder.getQuantity());
                    order.setPricePerUnit(updatedOrder.getPricePerUnit());
                    order.setType(updatedOrder.getType());
                    order.setStatus(updatedOrder.getStatus());
                    return orderRepository.save(order);
                })
                .orElseThrow(() -> new RuntimeException("Order not found with id " + id));
    }

    // Delete
    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable Long id) {
        orderRepository.deleteById(id);
    }
}
