package com.enicarthage.example.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Producteur {

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getNumero_fiscal() {
        return numero_fiscal;
    }

    public void setNumero_fiscal(Long numero_fiscal) {
        this.numero_fiscal = numero_fiscal;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getRegionviticole() {
        return regionviticole;
    }

    public void setRegionviticole(String regionviticole) {
        this.regionviticole = regionviticole;
    }

    public Long getTelephone() {
        return telephone;
    }

    public void setTelephone(Long telephone) {
        this.telephone = telephone;
    }

    @Id
    @GeneratedValue
    private Long id;
    private Long numero_fiscal;
    private String nom;
    private String regionviticole;
    private Long telephone;
    private Long idcompte;
    private String ville;
    private String rue;
    private Long code_postal; 
    private Long numero_rue;
    
    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }
    
    public String getRue()
    {
    	return rue;
    }
    
    public void setRue(String rue)
    {
    	this.rue = rue;
    }
    
    public Long getNumero_rue()
    {
    	return numero_rue;
    }
    
    public void setNumero_rue(Long numero_rue)
    {
    	this.numero_rue = numero_rue;
    }
    
    public Long getCode_postal()
    {
    	return code_postal;
    }
    
    public void setCode_postal(Long code_postal)
    {
    	this.code_postal = code_postal;
    }
    
    public Long getIdcompte() {
        return idcompte;
    }

    public void setIdcompte(Long idcompte) {
        this.idcompte = idcompte;
    }

    public Producteur(){}

}
