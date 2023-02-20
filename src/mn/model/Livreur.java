package mn.model;

import mn.Dao.annotation.Key;
import mn.Dao.annotation.Table;
import mn.ui.commons.View;

@Table("livreur")
public class Livreur {
    @Key
    Integer id;
    @View(value = "Nom",changeable = true,rang = 0)
    String nom;
    @View(value = "Prenom",changeable = true,rang = 1)
    String prenom;
    @View(value = "Contact",changeable = true,rang = 2)
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

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    @Override
    public String toString() {
        return this.nom+" "+this.prenom;
    }
    
}
