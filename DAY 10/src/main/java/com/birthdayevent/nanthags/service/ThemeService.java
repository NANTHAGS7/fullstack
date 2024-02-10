package com.birthdayevent.nanthags.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.birthdayevent.nanthags.modal.Theme;
import com.birthdayevent.nanthags.repository.ThemeRepository;

@Service
public class ThemeService {

    @Autowired
    ThemeRepository r;

    @SuppressWarnings("null")
    public String add(Theme e)
	{
		r.save(e);
		return "Added";
	}
	
	public List<Theme> getDetails()
	{
		return r.findAll();
	}
		
	public void deleteDetails(int id) {
		r.deleteById(id);
	}
	
	
	
	public Theme getDetail(int id) {
	
		return r.findById(id).get();
	}
	
	public Theme updateDetails(Theme newUser ,int id) 
	{
		Theme up=r.findById(id).get();		
		 up.setTheme_name(newUser.getTheme_name());
		 up.setImage_url(newUser.getImage_url());
		 up.setCost(newUser.getCost());
		 up.setDescription(newUser.getDescription());
         return r.saveAndFlush(up);
	}

}
