package com.birthdayevent.nanthags.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.birthdayevent.nanthags.modal.Contact;
import com.birthdayevent.nanthags.repository.ContactRepository;

@Service
public class ContactService {

    @Autowired(required=true)
    ContactRepository r;

    @SuppressWarnings("null")
    public String add(Contact e)
	{
		r.save(e);
		return "Added";
	}
	
	public List<Contact> getDetails()
	{
		return r.findAll();
	}
		
	public void deleteDetails(int id) {
		r.deleteById(id);
	}
	public Contact getDetail(int id) {
	
		return r.findById(id).get();
	}
	
	public Contact updateDetails(Contact newUser ,int id) 
	{
		Contact up=r.findById(id).get();		
		 up.setName(newUser.getName());
		 up.setEmail(newUser.getEmail());
		 up.setDescription(newUser.getDescription());
         return r.saveAndFlush(up);
	}


}
