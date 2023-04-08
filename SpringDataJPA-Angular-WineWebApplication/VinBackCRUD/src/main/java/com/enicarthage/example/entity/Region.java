package com.enicarthage.example.entity;

import javax.persistence.*;

@Entity
@Table(name = "Regions")
public class Region {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "region" )
    private String region;

    public String getRegion() {
        return region;
    }

}