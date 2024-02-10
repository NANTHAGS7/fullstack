package com.birthdayevent.nanthags.modal;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Food {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int foodId;
    private String foodType;
    private List<String> foodItems;
    private String cost;

    public int getFoodId() {
        return this.foodId;
    }

    public void setFoodId(int foodId) {
        this.foodId = foodId;
    }

    public String getFoodType() {
        return this.foodType;
    }

    public void setFoodType(String foodType) {
        this.foodType = foodType;
    }

    public List<String> getFoodItems() {
        return this.foodItems;
    }

    public void setFoodItems(List<String> foodItems) {
        this.foodItems = foodItems;
    }

    public String getCost() {
        return this.cost;
    }

    public void setCost(String cost) {
        this.cost = cost;
    }

    
}
