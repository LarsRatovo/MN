/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package mn.model;

import mn.Dao.annotation.Table;
import mn.ui.commons.View;

/**
 *
 * @author Lars Ratovo
 */
@Table("full_depense")
public class DepenseDetail extends Depense{
    @View(value = "Nom",rang = 2)
    String nomlivreur;

    /**
     * @return the nomlivreur
     */
    public String getNomlivreur() {
        return nomlivreur;
    }

    /**
     * @param nomlivreur the nomlivreur to set
     */
    public void setNomlivreur(String nomlivreur) {
        this.nomlivreur = nomlivreur;
    }
}
