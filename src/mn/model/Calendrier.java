/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package mn.model;

import mn.Dao.annotation.Key;
import mn.Dao.annotation.Table;

/**
 *
 * @author Lars Ratovo
 */
@Table("calendrier")
public class Calendrier {
    Integer livreur;
    String date;

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
    
}
