package com.birthdayevent.nanthags.service;

// import com.birthdayevent.nanthags.dto.request.UserProfileIdRequest;
import com.birthdayevent.nanthags.dto.request.UserProfileRequest;
import com.birthdayevent.nanthags.dto.request.UserProfileupdataRequest;
import com.birthdayevent.nanthags.dto.response.UserProfileDetailsResponse;
import com.birthdayevent.nanthags.dto.response.UserProfileResponse;

public interface UserProfileService {

    UserProfileResponse addProfileResponse(UserProfileRequest request);
    UserProfileResponse updatUserProfile(UserProfileupdataRequest request,String id);
     UserProfileResponse deleteUserProfile(String id);
     UserProfileDetailsResponse getUserProfile(String id);

    
}
