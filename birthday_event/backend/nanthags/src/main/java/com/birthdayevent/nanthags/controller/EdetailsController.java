package com.birthdayevent.nanthags.controller;





import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;
import static com.birthdayevent.nanthags.utils.MyConstant.EVENT;
import static com.birthdayevent.nanthags.utils.MyConstant.USEREVENT;
import static com.birthdayevent.nanthags.utils.MyConstant.POSTEVENT;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.birthdayevent.nanthags.dto.request.EdetailsRequest;
import com.birthdayevent.nanthags.dto.response.BasicResponse;
import com.birthdayevent.nanthags.dto.response.EdetailsResponse;
import com.birthdayevent.nanthags.modal.EventDetails;
import com.birthdayevent.nanthags.repository.EdetailsRepository;
import com.birthdayevent.nanthags.service.EdetailsService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(EVENT)
@RequiredArgsConstructor
public class EdetailsController {
      private final EdetailsService edetailsService;
      private final EdetailsRepository edetailsRepository;

    @GetMapping(USEREVENT)
    public ResponseEntity<BasicResponse<EdetailsResponse>> getUser(){
        BasicResponse<EdetailsResponse> response=new BasicResponse<>();
        try{
            response=edetailsService.getAllUser();
            return new ResponseEntity<>(response, OK);
        }
        catch(Exception exception){
            response.setMessage("Something Went Wrong");
            return new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }

    @SuppressWarnings("null")
    @PostMapping(POSTEVENT)
    public EventDetails create(@RequestBody EventDetails models) {
        return edetailsRepository.save(models);
    }


    @DeleteMapping(EVENT + "/{id}")
    public ResponseEntity<BasicResponse<EdetailsResponse>> deleteBooking(@PathVariable Long id) {
        BasicResponse<EdetailsResponse> response = new BasicResponse<>();
        try {
            BasicResponse<EdetailsResponse> deletedBookingResponse = edetailsService.deletebooking(id);
            response.setMessage(deletedBookingResponse.getMessage());
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Failed to delete booking: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(EVENT+ "/{id}")
public ResponseEntity<BasicResponse<EdetailsResponse>> updateBooking(@PathVariable Long id, @RequestBody EdetailsRequest request) {
    BasicResponse<EdetailsResponse> response = new BasicResponse<>();
    try {
        BasicResponse<EdetailsResponse> updatedBookingResponse =edetailsService.updateBooking(id, request);
        response.setMessage(updatedBookingResponse.getMessage());
        response.setData(updatedBookingResponse.getData());
        return new ResponseEntity<>(response, OK);
    } catch (Exception e) {
        response.setMessage("Failed to update booking: " + e.getMessage());
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}

private EdetailsResponse mapToBookingResponse(EventDetails existingBooking) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'mapToBookingResponse'");
}

    

    
}