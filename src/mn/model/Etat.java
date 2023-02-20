/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package mn.model;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Lars Ratovo
 */
public class Etat {
    int etat;
    String nom;
    public Etat(int etat,String nom){
        this.etat=etat;
        this.nom=nom;
    }
    
    @Override
    public String toString() {
        return getNom();
    }
    
    public static List<Etat> getAll(){
        ArrayList<Etat> list=new ArrayList<>();
        list.add(new Etat(0, "Annulé"));
        list.add(new Etat(1, "En cours"));
        list.add(new Etat(2,"Effectué"));
        return list;
    }
    public static String of(int etat){
        return switch (etat) {
            case 0 -> "Annulé";
            case 1 -> "En cours";
            default -> "Effectué";
        };
    }
    /**
     * @return the etat
     */
    public int getEtat() {
        return etat;
    }

    /**
     * @param etat the etat to set
     */
    public void setEtat(int etat) {
        this.etat = etat;
    }

    /**
     * @return the nom
     */
    public String getNom() {
        return nom;
    }

    /**
     * @param nom the nom to set
     */
    public void setNom(String nom) {
        this.nom = nom;
    }
}
