package mn.model;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Locale;
import mn.Dao.annotation.Key;
import mn.Dao.annotation.Table;
import mn.ui.commons.View;

@Table("operation")
public class Operation {
    @Key
    Integer id;
    @View(value = "Ref",rang = 0)
    String ref;
    Integer fournisseur;
    Integer livreur;
    @View(value = "R/L",rang = 1)
    String type;
    Double prixSansFrais;
    Double prix;
    @View(value = "Contact",rang=2)
    String contact;
    @View(value = "Lieu",rang = 3)
    String lieu;
    String dateHeure;
    Integer etat;
    @View(value = "Obs",rang = 8)
    String observation;
    @View(value = "Prix sans frais",rang = 4)
    public String formatedPrixSansFrais(){
        return String.format(Locale.FRANCE,"%,.2f",prixSansFrais);
    }
    @View(value = "Prix avec frais",rang = 5)
    public String formatedPrixAvecFrais(){
        return String.format(Locale.FRANCE,"%,.2f",prix);
    }
    @View(value = "Date et Heure",rang = 6)
    public String formatedDateTime(){
        SimpleDateFormat format=new SimpleDateFormat("dd/MM/yyyy HH:mm");
        String tmpheuredate=dateHeure.replace("T"," ");
        tmpheuredate+=":00";
        return format.format(Timestamp.valueOf(tmpheuredate));
    }
    @View(value = "Etat",rang = 9)
    public String etat(){
        return Etat.of(etat);
    }
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getRef() {
        return ref;
    }

    public void setRef(String ref) {
        this.ref = ref;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Double getPrixSansFrais() {
        return prixSansFrais;
    }

    public void setPrixSansFrais(Double prixSansFrais) {
        this.prixSansFrais = prixSansFrais;
    }

    public Double getPrix() {
        return prix;
    }

    public void setPrix(Double prix) {
        this.prix = prix;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getLieu() {
        return lieu;
    }

    public void setLieu(String lieu) {
        this.lieu = lieu;
    }
    public Integer getFournisseur() {
        return fournisseur;
    }

    public void setFournisseur(Integer fournisseur) {
        this.fournisseur = fournisseur;
    }

    public Integer getLivreur() {
        return livreur;
    }

    public void setLivreur(Integer livreur) {
        this.livreur = livreur;
    }

    /**
     * @return the dateHeure
     */
    public String getDateHeure() {
        return dateHeure;
    }

    /**
     * @param dateHeure the dateHeure to set
     */
    public void setDateHeure(String dateHeure) {
        this.dateHeure = dateHeure;
    }

    /**
     * @return the etat
     */
    public Integer getEtat() {
        return etat;
    }

    /**
     * @param etat the etat to set
     */
    public void setEtat(Integer etat) {
        this.etat = etat;
    }
    public void setRef(Integer count){
        this.ref=String.valueOf(fournisseur)+"-"+(count+1);
    }

    /**
     * @return the observation
     */
    public String getObservation() {
        return observation;
    }

    /**
     * @param observation the observation to set
     */
    public void setObservation(String observation) {
        this.observation = observation;
    }
    
}
