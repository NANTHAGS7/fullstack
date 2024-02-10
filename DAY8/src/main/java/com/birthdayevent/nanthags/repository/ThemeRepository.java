package com.birthdayevent.nanthags.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.birthdayevent.nanthags.modal.Theme;

@Repository
public interface ThemeRepository extends JpaRepository<Theme,Integer>{

}
