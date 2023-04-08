package com.enicarthage.example.repository;

import com.enicarthage.example.entity.Region;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RegionRepository extends JpaRepository<Region, Long>{
    public List<Region> findByRegion(String region);
}
