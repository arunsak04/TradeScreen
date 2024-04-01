package com.arun.tradescreen.controller;

 

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import com.arun.tradescreen.entity.Trade;
import com.arun.tradescreen.repository.TradeRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/trades")
public class TradeController {

    @Autowired
    private TradeRepository tradeRepository;

    // Create
    @PostMapping
    public Trade createTrade(@RequestBody Trade trade) {
        return tradeRepository.save(trade);
    }

    // Read All
    @CrossOrigin(origins = "http://localhost:3000/tradeListing")
    @GetMapping
    public List<Trade> getAllTrades() {
        return tradeRepository.findAll();
    }

    // Read One
    @GetMapping("/{id}")
    public Optional<Trade> getTradeById(@PathVariable Long id) {
        return tradeRepository.findById(id);
    }

    // Update
    @PutMapping("/{id}")
    public Trade updateTrade(@PathVariable Long id, @RequestBody Trade updatedTrade) {
        return tradeRepository.findById(id)
                .map(trade -> {
                    trade.setStockName(updatedTrade.getStockName());
                    trade.setListingPrice(updatedTrade.getListingPrice());
                    trade.setQuantity(updatedTrade.getQuantity());
                    trade.setType(updatedTrade.getType());
                    trade.setPricePerUnit(updatedTrade.getPricePerUnit());
                    return tradeRepository.save(trade);
                })
                .orElseThrow(() -> new RuntimeException("Trade not found with id " + id));
    }

    // Delete
    @DeleteMapping("/{id}")
    public void deleteTrade(@PathVariable Long id) {
        tradeRepository.deleteById(id);
    }
}

