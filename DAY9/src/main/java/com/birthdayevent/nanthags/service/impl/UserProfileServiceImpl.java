package com.birthdayevent.nanthags.service.impl;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.birthdayevent.nanthags.dto.request.UserProfileIdRequest;
import com.birthdayevent.nanthags.dto.request.UserProfileRequest;
import com.birthdayevent.nanthags.dto.request.UserProfileupdataRequest;
import com.birthdayevent.nanthags.dto.response.UserProfileDetailsResponse;
import com.birthdayevent.nanthags.dto.response.UserProfileResponse;
import com.birthdayevent.nanthags.modal.UserProfile;
import com.birthdayevent.nanthags.repository.UserProfileRepository;
import com.birthdayevent.nanthags.service.UserProfileService;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class UserProfileServiceImpl implements UserProfileService{

    private final UserProfileRepository repo;
    @SuppressWarnings("null")
    @Override
    public UserProfileResponse addProfileResponse(UserProfileRequest request){ 
         var userprofile=UserProfile.builder()
        .fullname(request.getFullname())
        .email(request.getEmail())
        .mobileno(request.getMobileno())
        .profile(request.getProfile())
        .build();
       repo.save(userprofile);

       return UserProfileResponse.builder().message("success").build();
       
}

@SuppressWarnings("null")
    @Override
    public UserProfileResponse updatUserProfile(UserProfileupdataRequest request,String id)
    {
        Optional<UserProfile> userProfileOptional = repo.findById(id);
        if (userProfileOptional.isPresent()) {
            UserProfile userProfile = userProfileOptional.get();
            userProfile.setFullname(request.getFullname());
            userProfile.setEmail(request.getEmail());
            userProfile.setMobileno(request.getMobileno());
            userProfile.setProfile(request.getProfile());
            repo.save(userProfile);
            return UserProfileResponse.builder().message("success").build();
        } else {
            return UserProfileResponse.builder().message("Profile not found").build();
        }
    }

@SuppressWarnings("null")
    @Override
    public UserProfileResponse deleteUserProfile(String id)
    {
        Optional<UserProfile> userProfileOptional = repo.findById(id);
        if (userProfileOptional.isPresent()) {
           repo.deleteById(id);
            return UserProfileResponse.builder().message(" Deleted success").build();
        } else {
            return UserProfileResponse.builder().message("Profile not found").build();
        }
    }
    @SuppressWarnings("null")
    @Override
    public UserProfileDetailsResponse getUserProfile(String id)
    {
        Optional<UserProfile> userProfileOptional = repo.findById(id);
        if (userProfileOptional.isPresent()) {
            UserProfile userProfile = userProfileOptional.get();
            return UserProfileDetailsResponse.builder().fullname(userProfile.getFullname()).
            mobileno(userProfile.getMobileno()).profile(userProfile.getProfile()).
            email(userProfile.getEmail()).build();
        }
        else{
            return UserProfileDetailsResponse.builder().email(null).fullname(null).mobileno(0).profile(null).build();
 }
}


}
