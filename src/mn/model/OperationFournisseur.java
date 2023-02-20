/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package mn.model;

import java.util.List;

/**
 *
 * @author Lars Ratovo
 */
public class OperationFournisseur {
    Fournisseur fournisseur;
    List<OperationDetail> operations;

    /**
     * @return the fournisseur
     */
    public Fournisseur getFournisseur() {
        return fournisseur;
    }

    /**
     * @param fournisseur the fournisseur to set
     */
    public void setFournisseur(Fournisseur fournisseur) {
        this.fournisseur = fournisseur;
    }

    /**
     * @return the operations
     */
    public List<OperationDetail> getOperations() {
        return operations;
    }

    /**
     * @param operations the operations to set
     */
    public void setOperations(List<OperationDetail> operations) {
        this.operations = operations;
    }
    
}
