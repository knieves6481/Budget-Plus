package com.personal.budget_plus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

@Service
public class BudgetService 
{
    @Autowired
    private BudgetRepository purchaseRepository;
    
    public BudgetData save(BudgetData purchase) {
        float roundedPrice = (float) (Math.floor(purchase.getPrice() * 100.0) / 100.0);
        purchase.setPrice(roundedPrice);
        
        LocalDateTime date = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd hh:mm a", Locale.ENGLISH);
        String text = date.format(formatter);
        
        purchase.setDate(text);
        return purchaseRepository.save(purchase); // Service calls Repository
    }
}
