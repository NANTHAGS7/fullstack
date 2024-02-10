package com.birthdayevent.nanthags.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.birthdayevent.nanthags.modal.Food;
import com.birthdayevent.nanthags.repository.FoodRepository;

@Service
public class FoodService {


    @Autowired
    FoodRepository r;

    @SuppressWarnings("null")
    public String add(Food f){
        r.save(f);
        return "Added";
    }


    public List<Food> getMenu(){
        return r.findAll();
    }

public void deleteMenu(int id){
    r.deleteById(id);
}

public Food updateMenu(Food newFood,int id){
    Food ff = r.findById(id).get();
    ff.setFoodType(newFood.getFoodType());
    ff.setFoodItems(newFood.getFoodItems());
    ff.setCost(newFood.getCost());
    return r.saveAndFlush(ff);
}

}
