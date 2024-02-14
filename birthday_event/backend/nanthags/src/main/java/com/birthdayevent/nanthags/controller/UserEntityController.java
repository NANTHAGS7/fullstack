package com.birthdayevent.nanthags.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.birthdayevent.nanthags.modal.UserEntity;
import com.birthdayevent.nanthags.service.UserEntityService;


@RestController
public class UserEntityController {

    @Autowired
   UserEntityService service;

    @PostMapping("/add/event")
public String addDetails(@RequestBody UserEntity m) {
    service.add(m);
    return "event Added" ;
}
@GetMapping("/get/event")
public List<UserEntity> showDetails() {
    return service.getDetails();
}
@GetMapping("/get/event/{id}")
public UserEntity showDetail(@PathVariable int id) {
    return service.getDetail(id);
}
@PutMapping("/update/event/{id}")
public UserEntity Details(@RequestBody UserEntity newUser ,@PathVariable int id)
{
     return service.updateDetails(newUser,id);
}
@DeleteMapping("/delete/event/{id}")
public String delete(@PathVariable int id )
{
    service.deleteDetails(id);
    return "your event id "+id+ " is deleted";
}

}
