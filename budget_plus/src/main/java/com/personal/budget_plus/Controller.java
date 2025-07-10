
package com.personal.budget_plus;

import java.util.List;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/api/items")
public class Controller 
{
    @Autowired
    private BudgetRepository budgetRepository;
    
    public BudgetData addBudgetData(@RequestBody BudgetData budgetData)
    {
    return budgetRepository.save(budgetData);
    }
    
    @GetMapping
    public List<BudgetData> getBudgetRepository() 
    {
        return budgetRepository.findAll();
    }
    
    @PostMapping
    BudgetData budgetData(@RequestBody BudgetData newItem) 
    {
      return budgetRepository.save(newItem);
    }
}
