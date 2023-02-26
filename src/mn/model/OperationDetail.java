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
    @View(value = "Livreur",rang = 7,changeable = true)
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
    public Operation extractOperationFromSelf(){
        Operation operation=new Operation();
        operation.id=this.id;
        operation.contact=this.contact;
        operation.dateHeure=this.dateHeure;
        operation.etat=this.etat;
        operation.fournisseur=this.fournisseur;
        operation.lieu=this.lieu;
        operation.livreur=this.livreur;
        operation.observation=this.observation;
        operation.prix=this.prix;
        operation.prixSansFrais=this.prixSansFrais;
        operation.ref=this.ref;
        operation.type=this.type;
        return operation;
    }
}
