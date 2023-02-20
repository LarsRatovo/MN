package mn.model;


import mn.Dao.annotation.Key;
import mn.Dao.annotation.Table;
import mn.ui.commons.View;

@Table("fournisseur")
public class Fournisseur {
    @Key
    Integer id;
    @View(value = "Nom",rang = 1,changeable = true)
    String nom;
    @View(value = "Prénom",rang = 2,changeable = true)
    String prenom;
    @View(value = "Réuperation",rang = 3,changeable = true)
    String recuperation;
    @View(value = "Contact",rang = 4,changeable = true)
    String contact;
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getRecuperation() {
        return recuperation;
    }

    public void setRecuperation(String recuperation) {
        this.recuperation = recuperation;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }
    @View(value = "Ref",rang = 0)
    public String getCode(){
        return "MN"+this.id.toString();
    }
}
