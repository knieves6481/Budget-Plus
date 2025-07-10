/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.personal.budget_plus;
import org.springframework.data.jpa.repository.JpaRepository;
/**
 *
 * @author keanu
 */
public interface BudgetRepository extends JpaRepository<BudgetData, Long> 
{
    
}
