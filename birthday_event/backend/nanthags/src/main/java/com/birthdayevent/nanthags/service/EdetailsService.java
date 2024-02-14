package com.birthdayevent.nanthags.service;

import com.birthdayevent.nanthags.dto.request.EdetailsRequest;
import com.birthdayevent.nanthags.dto.response.BasicResponse;
import com.birthdayevent.nanthags.dto.response.EdetailsResponse;

public interface EdetailsService {

      BasicResponse<EdetailsResponse> getAllUser();
      BasicResponse<EdetailsResponse> deletebooking(Long id);
      BasicResponse<EdetailsResponse> updateBooking(Long id, EdetailsRequest request);


}
