package com.personal.budget_plus;

import jakarta.persistence.*;

@Entity
public class BudgetData {
    
public BudgetData(String category, float price, String date) 
{
    this.category = category;
    this.price = price;
    this.date = date;
}
public BudgetData()
{

}


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String category;
    private float price;
    private String date;

    // Getters and setters
    public String getCategory()
    {
    return category;
    }
    public float getPrice()
    {
    return price;
    }
    public String getDate()
    {
    return date;
    }
    public Long getId()
    {
    return id;
    }
    public void setCategory(String tempCategory)
    {
    category = tempCategory;
    }
    public void setPrice(float tempPrice)
    {
    price = tempPrice;
    }
    public void setDate(String tempDate)
    {
    date = tempDate;
    }
    public void setId(long tempId)
    {
    id = tempId;
    }
}