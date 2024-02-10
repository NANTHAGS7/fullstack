package com.birthdayevent.nanthags.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.birthdayevent.nanthags.modal.UserEntity;
import com.birthdayevent.nanthags.repository.UserEntityRepository;

@Service
public class UserEntityService {

    @Autowired
    UserEntityRepository r;

    @SuppressWarnings("null")
    public String add(UserEntity e)
	{
		r.save(e);
		return "Added";
	}
	
	public List<UserEntity> getDetails()
	{
		return r.findAll();
	}
		
	public void deleteDetails(int id) {
		r.deleteById(id);
	}
	
	
	
	public UserEntity getDetail(int id) {
	
		return r.findById(id).get();
	}
	
	public UserEntity updateDetails(UserEntity newUser ,int id) 
	{
		UserEntity up=r.findById(id).get();		
		 up.setApplicant_name(newUser.getApplicant_name());
		 up.setEvent_name(newUser.getEvent_name());
		 up.setApplicant_address(newUser.getApplicant_address());
		 up.setApplicant_mobile_no(newUser.getApplicant_mobile_no());
		 up.setApplicant_email(newUser.getApplicant_email());
		 up.setDate(newUser.getDate());
		 up.setTime(newUser.getTime());
		 up.setNo_of_people(newUser.getNo_of_people());
		 up.setFood_type(newUser.getFood_type());
		 up.setAdd_ons(newUser.getAdd_ons());
         return r.saveAndFlush(up);
	}

}
