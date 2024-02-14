package com.birthdayevent.nanthags.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AddonsRequest {

    private String addon_name;
    private String image_url;
    private int cost;
    private String description;

}
