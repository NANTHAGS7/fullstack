package com.birthdayevent.nanthags.modal;

import jakarta.persistence.Id;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String applicant_name;
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getApplicant_name() {
        return applicant_name;
    }

    public void setApplicant_name(String applicant_name) {
        this.applicant_name = applicant_name;
    }

    public String getEvent_name() {
        return event_name;
    }

    public void setEvent_name(String event_name) {
        this.event_name = event_name;
    }

    public String getApplicant_address() {
        return applicant_address;
    }

    public void setApplicant_address(String applicant_address) {
        this.applicant_address = applicant_address;
    }

    public long getApplicant_mobile_no() {
        return applicant_mobile_no;
    }

    public void setApplicant_mobile_no(long applicant_mobile_no) {
        this.applicant_mobile_no = applicant_mobile_no;
    }

    public String getApplicant_email() {
        return applicant_email;
    }

    public void setApplicant_email(String applicant_email) {
        this.applicant_email = applicant_email;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getNo_of_people() {
        return no_of_people;
    }

    public void setNo_of_people(int no_of_people) {
        this.no_of_people = no_of_people;
    }

    public String getFood_type() {
        return food_type;
    }

    public void setFood_type(String food_type) {
        this.food_type = food_type;
    }

    public List<String> getAdd_ons() {
        return add_ons;
    }

    public void setAdd_ons(List<String> add_ons) {
        this.add_ons = add_ons;
    }

    private String event_name;
    private String applicant_address;
    private long applicant_mobile_no;
    private String applicant_email;
    private String date;
    private String time;
    private int no_of_people;
    private String food_type;
    private List<String> add_ons;

    public UserEntity() {
    }
}
