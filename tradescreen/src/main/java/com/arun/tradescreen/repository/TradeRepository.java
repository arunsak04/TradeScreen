package com.arun.tradescreen.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.arun.tradescreen.entity.Trade;

@Repository
public interface TradeRepository extends JpaRepository<Trade, Long> {
	  List<Trade> findByStockNameAndListingPriceAndQuantityAndTypeAndPricePerUnit(
		        String stockName, 
		        double listingPrice, 
		        int quantity, 
		        String type, 
		        double pricePerUnit
		    );
}

