package com.birthdayevent.nanthags.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.birthdayevent.nanthags.modal.Addons;
import com.birthdayevent.nanthags.repository.AddonsRepository;

@Service
public class AddonsService {

    @Autowired
    AddonsRepository r;

    @SuppressWarnings("null")
    public String add(Addons e)
	{
		r.save(e);
		return "Added";
	}
	
	public List<Addons> getDetails()
	{
		return r.findAll();
	}
		
	public void deleteDetails(int id) {
		r.deleteById(id);
	}
	public Addons getDetail(int id) {
	
		return r.findById(id).get();
	}
	
	public Addons updateDetails(Addons newUser ,int id) 
	{
		Addons up=r.findById(id).get();		
		 up.setAddon_name(newUser.getAddon_name());
		 up.setImage_url(newUser.getImage_url());
		 up.setCost(newUser.getCost());
		 up.setDescription(newUser.getDescription());
         return r.saveAndFlush(up);
	}

}
