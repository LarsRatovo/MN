/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/GUIForms/JPanel.java to edit this template
 */
package mn.ui.panels.OperationUI;
import java.util.List;
import mn.Dao.CustomDataOperation;
import mn.model.Livreur;
import mn.model.OperationDetail;
import mn.model.OperationFournisseur;

/**
 *
 * @author lars
 */
public class CommandeClient extends javax.swing.JPanel {

    /**
     * Creates new form CommandeClient
     */
    public CommandeClient() {
        initComponents();
    }
    public void set(OperationFournisseur opfseur,CustomDataOperation data,List<Livreur> livreurs,CommandePanelModel commandePanel) throws Exception{
        this.nom.setText(opfseur.getFournisseur().getCode()+" "+opfseur.getFournisseur().getNom()+" "+opfseur.getFournisseur().getPrenom()+" "+opfseur.getFournisseur().getContact()+" "+opfseur.getFournisseur().getRecuperation());
        this.tableauOperation1.init(opfseur.getOperations(), data,livreurs,commandePanel);
        this.revalidate();
    }
    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        nom = new javax.swing.JLabel();
        tableauOperation1 = new mn.ui.panels.OperationUI.TableauOperation();

        setBackground(new java.awt.Color(255, 255, 255));

        nom.setText("Nom du client");

        tableauOperation1.setBackground(new java.awt.Color(255, 255, 255));

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(this);
        this.setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addComponent(tableauOperation1, javax.swing.GroupLayout.DEFAULT_SIZE, 662, Short.MAX_VALUE)
                .addContainerGap())
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(nom)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(nom)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(tableauOperation1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap())
        );
    }// </editor-fold>//GEN-END:initComponents


    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel nom;
    private mn.ui.panels.OperationUI.TableauOperation tableauOperation1;
    // End of variables declaration//GEN-END:variables

}
