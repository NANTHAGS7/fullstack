package com.birthdayevent.nanthags.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.birthdayevent.nanthags.modal.UserEntity;

@Repository
public interface UserEntityRepository extends JpaRepository<UserEntity,Integer>{

}
