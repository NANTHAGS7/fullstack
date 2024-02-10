package com.birthdayevent.nanthags.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.birthdayevent.nanthags.modal.UserProfile;

public interface UserProfileRepository extends JpaRepository<UserProfile,String>{

}
