package com.birthdayevent.nanthags.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ThemeResponse {
    private int id;
    private String theme_name;
    private String image_url;
    private int cost;
    private String description;
}
