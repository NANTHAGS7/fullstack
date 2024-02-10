package com.birthdayevent.nanthags.modal;

import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import static jakarta.persistence.GenerationType.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Event_details")

public class UserEvent {

    @Id
    @GeneratedValue(strategy = UUID)
    private String event_id;

    @Column(nullable = false)
    private String event_name;

    @Column(nullable = false)
    private String event_destination;

    @Column(nullable = false)
    private Double price;

    @Column(nullable = false)
    private int maxparticipants;
    
    @ManyToMany
    @JoinTable(name = "event_user_profile",
               joinColumns = @JoinColumn(name = "event_id"),
               inverseJoinColumns = @JoinColumn(name = "profileid"))
    private Set<UserProfile> participants;


}
