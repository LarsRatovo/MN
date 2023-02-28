/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/GUIForms/JPanel.java to edit this template
 */
package mn.ui.panels;

import com.github.lgooddatepicker.optionalusertools.DateChangeListener;
import com.github.lgooddatepicker.zinternaltools.DateChangeEvent;
import java.awt.event.MouseEvent;
import java.io.File;
import java.io.FileInputStream;
import javax.print.Doc;
import javax.print.DocFlavor;
import javax.print.DocPrintJob;
import javax.print.PrintService;
import javax.print.PrintServiceLookup;
import javax.print.SimpleDoc;
import javax.print.attribute.HashPrintRequestAttributeSet;
import javax.print.attribute.PrintRequestAttributeSet;
import javax.print.attribute.standard.MediaSizeName;
import java.awt.event.MouseListener;
import java.util.List;
import mn.Dao.Access;
import mn.model.Livreur;
import java.sql.Connection;
import java.text.NumberFormat;
import java.text.ParseException;
import java.util.Locale;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.DefaultListModel;
import javax.swing.JOptionPane;
import javax.swing.ListSelectionModel;
import mn.Dao.CustomDataOperation;
import mn.Dao.Data;
import mn.model.Depense;
import mn.model.Docs;
import mn.model.OperationDetail;
import mn.ui.commons.TableModel;
import mn.ui.panels.OperationUI.CommandePanelModel;

/**
 *
 * @author lars
 */
public class OperationPerLivreur extends CommandePanelModel{
    List<Livreur> livreurs;
    List<OperationDetail> detail;
    Data<Depense> depenseData=new Data<>();
    CustomDataOperation dataop;
    Livreur liv;
    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        jLabel1 = new javax.swing.JLabel();
        jScrollPane1 = new javax.swing.JScrollPane();
        jList1 = new javax.swing.JList<>();
        datePicker1 = new com.github.lgooddatepicker.components.DatePicker();
        jButton1 = new javax.swing.JButton();
        jLabel2 = new javax.swing.JLabel();
        designation = new javax.swing.JTextField();
        jLabel3 = new javax.swing.JLabel();
        jLabel4 = new javax.swing.JLabel();
        montant = new javax.swing.JTextField();
        jButton2 = new javax.swing.JButton();
        tableauOperation1 = new mn.ui.panels.OperationUI.TableauOperation();
        tableau1 = new mn.ui.commons.Tableau();

        jPanel1.setBackground(new java.awt.Color(255, 255, 255));

        jLabel1.setText("Livreurs");

        jList1.setModel(new javax.swing.AbstractListModel<String>() {
            String[] strings = { "Item 1", "Item 2", "Item 3", "Item 4", "Item 5" };
            public int getSize() { return strings.length; }
            public String getElementAt(int i) { return strings[i]; }
        });
        jScrollPane1.setViewportView(jList1);

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jScrollPane1)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addGap(65, 65, 65)
                                .addComponent(jLabel1))
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addContainerGap()
                                .addComponent(datePicker1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                        .addGap(0, 19, Short.MAX_VALUE)))
                .addContainerGap())
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addComponent(datePicker1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(5, 5, 5)
                .addComponent(jLabel1)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jScrollPane1)
                .addContainerGap())
        );

        jButton1.setText("Imprimer");
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton1ActionPerformed(evt);
            }
        });

        jLabel2.setText("Total : ");

        jLabel3.setText("Désignation");

        jLabel4.setText("Montant");

        jButton2.setText("Enregistrer");
        jButton2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton2ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(this);
        this.setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(jButton1)
                        .addGap(0, 0, Short.MAX_VALUE))
                    .addComponent(tableauOperation1, javax.swing.GroupLayout.DEFAULT_SIZE, 225, Short.MAX_VALUE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jLabel3)
                    .addComponent(jLabel4)
                    .addComponent(designation, javax.swing.GroupLayout.PREFERRED_SIZE, 259, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jButton2)
                    .addComponent(montant, javax.swing.GroupLayout.PREFERRED_SIZE, 259, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(tableau1, javax.swing.GroupLayout.PREFERRED_SIZE, 450, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel2))
                .addContainerGap())
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(tableau1, javax.swing.GroupLayout.PREFERRED_SIZE, 0, Short.MAX_VALUE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jLabel2)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jLabel3)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(designation, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jLabel4)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(montant, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jButton2))
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(jButton1)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(tableauOperation1, javax.swing.GroupLayout.DEFAULT_SIZE, 414, Short.MAX_VALUE)))
                .addContainerGap())
        );
    }// </editor-fold>//GEN-END:initComponents

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
        try {
            Docs doc=new Docs(detail,liv);
            doc.initAndDo();
            FileInputStream fis=new FileInputStream(doc.getPath());  
            DocFlavor flavor = DocFlavor.INPUT_STREAM.POSTSCRIPT;
            PrintRequestAttributeSet aset = new HashPrintRequestAttributeSet();
            aset.add(MediaSizeName.ISO_A4);
            PrintService[] pservices =PrintServiceLookup.lookupPrintServices(flavor, aset);
            if (pservices.length > 0) {
            DocPrintJob pj = pservices[0].createPrintJob();
            Doc docs=new SimpleDoc(fis, flavor, null);
            pj.print(docs, aset);
            fis.close();
            File file=new File(doc.getPath());
            file.delete();
            }
        } catch (Exception e) {
            e.printStackTrace();
            JOptionPane.showMessageDialog(null,"Erreur de print");
        }        // TODO add your handling code here:
    }//GEN-LAST:event_jButton1ActionPerformed

    private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton2ActionPerformed
        // TODO add your handling code here:
        String des=this.designation.getText();
        String dep=this.montant.getText();
        try {
            Depense d=new Depense();
            d.setDesignation(des);
            d.setLivreur(liv.getId());
            d.setDate(this.datePicker1.getDateStringOrEmptyString());
            d.setDepense(Double.parseDouble(dep));
            this.depenseData.save(d);
            JOptionPane.showMessageDialog(null,"Sauvegarder","Donnée sauvegardé",JOptionPane.OK_OPTION);
            setLivreur();
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null,"Erreur de sauvegarde","Valeur non pris en charge",JOptionPane.ERROR_MESSAGE);
        }
    }//GEN-LAST:event_jButton2ActionPerformed
    private void ofDay() throws Exception{
        String date=datePicker1.getDateStringOrEmptyString();
        Connection con=Access.getConnection();
        this.livreurs=dataop.livreurdu(date, con);
        DefaultListModel model=new DefaultListModel();
        model.addAll(livreurs);
        this.jList1.setModel(model);
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private com.github.lgooddatepicker.components.DatePicker datePicker1;
    private javax.swing.JTextField designation;
    private javax.swing.JButton jButton1;
    private javax.swing.JButton jButton2;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JList<String> jList1;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JTextField montant;
    private mn.ui.commons.Tableau tableau1;
    private mn.ui.panels.OperationUI.TableauOperation tableauOperation1;
    // End of variables declaration//GEN-END:variables
    private void setLivreur() throws Exception{
        String date=datePicker1.getDateStringOrEmptyString();
        Connection con=Access.getConnection();
        Depense dep=new Depense();
        dep.setLivreur(liv.getId());
        dep.setDate(date);
        List<Depense> deps=depenseData.findByExample(dep);
        Double total=0.;
        for(Depense tmp:deps){
            total+=tmp.getDepense();
        }
        this.jLabel2.setText("Total : "+String.format(Locale.FRANCE,"%,.0f",total)+" Ar");
        CustomModel model=new CustomModel(deps,Depense.class,depenseData);
        this.tableau1.init(Depense.class, dataop, model);
        this.detail=dataop.livreur(liv.getId(), date, con);
        this.tableauOperation1.init(detail, dataop, livreurs, this);
        this.revalidate();
    }
    @Override
    public void start() throws Exception {
        initComponents();
        depenseData.init(Depense.class);
        this.jList1.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);
        this.dataop=new CustomDataOperation();
        datePicker1.setDateToToday();
        this.datePicker1.addDateChangeListener(new DateChangeListener() {
            @Override
            public void dateChanged(DateChangeEvent dce) {
                try{
                    ofDay();
                    revalidate();
                    jList1.revalidate();
                }catch(Exception e){
                    e.printStackTrace();
                }
            }
        });
        this.jList1.addMouseListener(new MouseListener() {
            @Override
            public void mouseClicked(MouseEvent me) {
                try{
                if(me.getClickCount()==2){
                    int index=jList1.locationToIndex(me.getPoint());
                    liv=livreurs.get(index);
                    if(liv!=null){
                        setLivreur();
                    }
                }
                }catch(Exception e){
                    e.printStackTrace();
                }
                
            }

            @Override
            public void mousePressed(MouseEvent me) {
            }

            @Override
            public void mouseReleased(MouseEvent me) {
            }

            @Override
            public void mouseEntered(MouseEvent me) {
            }

            @Override
            public void mouseExited(MouseEvent me) {
            }
        });
        ofDay();
    }

    @Override
    public void setList(Connection con) throws Exception {
        setLivreur();
    }
    private class CustomModel extends TableModel<Depense>{
        public CustomModel(List<Depense> list, Class<Depense> type, Data data) {
            super(list, type, data);
        }
        @Override
        public void setValueAt(Object aValue, int rowIndex, int columnIndex) {
            Depense d=this.getModel(rowIndex);
            if(columnIndex==1){
                NumberFormat formater=NumberFormat.getInstance(Locale.FRANCE);
                try {
                    d.setDepense(formater.parse(aValue.toString()).doubleValue());
                    depenseData.update(d);
                } catch (Exception ex) {
                    Logger.getLogger(OperationPerLivreur.class.getName()).log(Level.SEVERE, null, ex);
                }
            }else{
                super.setValueAt(aValue, rowIndex, columnIndex);
            }
        }
    }
}
