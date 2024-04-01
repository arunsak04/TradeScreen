package com.arun.tradescreen.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arun.tradescreen.entity.Trade;
import com.arun.tradescreen.repository.TradeRepository;
 

@Service
public class TradeService {

    @Autowired
    private TradeRepository tradeRepository;

    public Trade saveTrade(Trade trade) {
        return tradeRepository.save(trade);
    }

    public List<Trade> getAllTrades() {
        return tradeRepository.findAll();
    }

    public Optional<Trade> getTradeById(Long id) {
        return tradeRepository.findById(id);
    }

    public Trade updateTrade(Long id, Trade updatedTrade) {
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

    public void deleteTrade(Long id) {
    	tradeRepository.deleteById(id);
    }
}
