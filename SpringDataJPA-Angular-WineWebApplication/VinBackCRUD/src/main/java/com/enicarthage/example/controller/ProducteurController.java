package com.enicarthage.example.controller;

import com.enicarthage.example.entity.Producteur;
import com.enicarthage.example.repository.ProducteurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200", "http://localhost:8080","http://localhost:8081" })
@RestController
@RequestMapping("/api/v1/")
public class ProducteurController {
    @Autowired
    ProducteurRepository producteurRepository;

    @PostMapping("/producteur")
    public Producteur addProducteur(@RequestBody Producteur producteur ) throws Exception
    {

        if (producteur.getIdcompte()!= null )
        {
            Producteur test = producteurRepository.findByIdcompte(producteur.getIdcompte()) ;
            if (test!= null)
            {
                throw new Exception(("Producteur existe déjà "));
            }
        }
        Producteur pro = null;
        return  producteurRepository.save(producteur);
        // return pro;

    }

    @GetMapping("/producteur/{idcompte}")
    public Producteur getProducteurByidCompte(@PathVariable Long idcompte)
    {
        return producteurRepository.findByIdcompte(idcompte);
    }
    @GetMapping("/ProducteurRegion/{region}")
    public List<Producteur> producteurByRegion_Viticole(@PathVariable String region)
    {
        return producteurRepository.findByRegionviticole(region) ;
    }

    @GetMapping("/Producteurs")
    public List<Producteur> getProducteurs()
    {
        return producteurRepository.findAll();
    }
}
