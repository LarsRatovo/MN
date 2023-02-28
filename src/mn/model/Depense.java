/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package mn.model;

import java.util.Locale;
import mn.Dao.annotation.Key;
import mn.Dao.annotation.Table;
import mn.ui.commons.View;

/**
 *
 * @author lars
 */
@Table("depenses")
public class Depense {
    @Key
    Integer id;
    Integer livreur;
    Double depense;
    @View(value = "Designation",rang = 0,changeable = true)
    String designation;
    String date;

    /**
     * @return the id
     */
    public Integer getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * @return the livreur
     */
    public Integer getLivreur() {
        return livreur;
    }

    /**
     * @param livreur the livreur to set
     */
    public void setLivreur(Integer livreur) {
        this.livreur = livreur;
    }

    /**
     * @return the depense
     */
    public Double getDepense() {
        return depense;
    }

    /**
     * @param depense the depense to set
     */
    public void setDepense(Double depense) {
        this.depense = depense;
    }

    /**
     * @return the designation
     */
    public String getDesignation() {
        return designation;
    }

    /**
     * @param designation the designation to set
     */
    public void setDesignation(String designation) {
        this.designation = designation;
    }

    /**
     * @return the date
     */
    public String getDate() {
        return date;
    }

    /**
     * @param date the date to set
     */
    public void setDate(String date) {
        this.date = date;
    }
    @View(value = "Valeur",rang = 1,changeable = true)
    public String formated(){
        return String.format(Locale.FRANCE,"%,.0f",depense);
    }
}
