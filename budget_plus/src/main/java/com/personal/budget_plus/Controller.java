
package com.personal.budget_plus;

import java.util.List;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:5173") 
@RestController
@RequestMapping("/api/items")
public class Controller 
{
    @Autowired //sets up dependencies and matching beans 
    private BudgetRepository budgetRepository;
    
    public BudgetData addBudgetData(@RequestBody BudgetData budgetData)
    {
    return budgetRepository.save(budgetData);
    }
    
    @GetMapping //Get tag tells backend to run method when receiving get request
    public List<BudgetData> getBudgetRepository() 
    {
        return budgetRepository.findAll();
    }
    
    @PostMapping //Post tag tells backend to run method when receiving post data
    BudgetData budgetData(@RequestBody BudgetData newItem) 
    {
      return budgetRepository.save(newItem);
    }
}
