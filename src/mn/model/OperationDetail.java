/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package mn.model;

import mn.ui.commons.View;

/**
 *
 * @author Lars Ratovo
 */
public class OperationDetail extends Operation{
    @View(value = "Livreur",rang = 7)
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
