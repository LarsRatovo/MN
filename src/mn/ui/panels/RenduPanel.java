/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/GUIForms/JPanel.java to edit this template
 */
package mn.ui.panels;

import com.github.lgooddatepicker.zinternaltools.DateChangeEvent;
import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.File;
import java.text.NumberFormat;
import java.util.List;
import java.util.Locale;
import mn.Dao.CustomDataOperation;
import mn.Dao.Data;
import mn.model.Depense;
import mn.model.DepenseDetail;
import java.sql.Connection;
import javax.imageio.ImageIO;
import javax.swing.JFileChooser;
import javax.swing.JOptionPane;
import mn.Dao.Access;
import mn.Dao.CustomDataFournisseur;
import mn.model.Fournisseur;
import mn.model.OperationDetail;
import mn.ui.commons.TableModel;
import mn.ui.panels.OperationUI.CommandePanelModel;

/**
 *
 * @author lars
 */
public class RenduPanel extends CommandePanelModel {
    Data<DepenseDetail> depensedata;
    CustomDataFournisseur dataf;
    CustomDataOperation dataop;
    Fournisseur fseur;
    Double resteVirtuel;
    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        datePicker1 = new com.github.lgooddatepicker.components.DatePicker();
        codeInput = new javax.swing.JTextField();
        jButton1 = new javax.swing.JButton();
        jPanel1 = new javax.swing.JPanel();
        frais = new javax.swing.JLabel();
        depense = new javax.swing.JLabel();
        restev = new javax.swing.JLabel();
        jTextField2 = new javax.swing.JTextField();
        diff = new javax.swing.JLabel();
        tableau1 = new mn.ui.commons.Tableau();
        jButton2 = new javax.swing.JButton();
        fseurnom = new javax.swing.JLabel();
        fseurContact = new javax.swing.JLabel();
        lieuDeRecup = new javax.swing.JLabel();
        jPanel2 = new javax.swing.JPanel();
        Total = new javax.swing.JLabel();
        totalSansFrais = new javax.swing.JLabel();
        totalFrais = new javax.swing.JLabel();
        tableauOperation1 = new mn.ui.panels.OperationUI.TableauOperation();

        jButton1.setText("Chercher");
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton1ActionPerformed(evt);
            }
        });

        jPanel1.setBackground(new java.awt.Color(255, 255, 255));

        frais.setText("Total frais");

        depense.setText("Total dépense");

        restev.setText("Reste virtuel");

        jTextField2.addInputMethodListener(new java.awt.event.InputMethodListener() {
            public void caretPositionChanged(java.awt.event.InputMethodEvent evt) {
            }
            public void inputMethodTextChanged(java.awt.event.InputMethodEvent evt) {
                jTextField2InputMethodTextChanged(evt);
            }
        });
        jTextField2.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyReleased(java.awt.event.KeyEvent evt) {
                jTextField2KeyReleased(evt);
            }
        });

        diff.setText("Différence");

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(frais, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(depense, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(restev, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(jTextField2)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addComponent(diff)
                        .addGap(0, 0, Short.MAX_VALUE))
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                        .addGap(0, 0, Short.MAX_VALUE)
                        .addComponent(tableau1, javax.swing.GroupLayout.PREFERRED_SIZE, 250, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addContainerGap())
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(frais)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(depense)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(restev)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jTextField2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(diff)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(tableau1, javax.swing.GroupLayout.DEFAULT_SIZE, 556, Short.MAX_VALUE)
                .addContainerGap())
        );

        jButton2.setText("PNG");
        jButton2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton2ActionPerformed(evt);
            }
        });

        fseurnom.setText("FOURNISSEUR");

        fseurContact.setText("CONTACT");

        lieuDeRecup.setText("LIEU DE RECUP");

        jPanel2.setBackground(new java.awt.Color(255, 255, 255));

        Total.setText("TOTAL : ");

        totalSansFrais.setText("TOTAL SANS FRAIS :");

        totalFrais.setText("TOTAL FRAIS :");

        javax.swing.GroupLayout jPanel2Layout = new javax.swing.GroupLayout(jPanel2);
        jPanel2.setLayout(jPanel2Layout);
        jPanel2Layout.setHorizontalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel2Layout.createSequentialGroup()
                        .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(Total)
                            .addComponent(totalFrais)
                            .addComponent(totalSansFrais))
                        .addGap(0, 0, Short.MAX_VALUE))
                    .addComponent(tableauOperation1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addContainerGap())
        );
        jPanel2Layout.setVerticalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addComponent(Total)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(totalSansFrais)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(totalFrais)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(tableauOperation1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(this);
        this.setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(datePicker1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(codeInput, javax.swing.GroupLayout.DEFAULT_SIZE, 332, Short.MAX_VALUE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jButton1)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jButton2)
                .addGap(75, 75, 75))
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jPanel2, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addGroup(layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(fseurnom)
                            .addComponent(fseurContact)
                            .addComponent(lieuDeRecup))
                        .addGap(0, 0, Short.MAX_VALUE)))
                .addContainerGap())
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(datePicker1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(codeInput, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jButton1)
                    .addComponent(jButton2))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(fseurnom)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(fseurContact)
                        .addGap(5, 5, 5)
                        .addComponent(lieuDeRecup)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jPanel2, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))
                .addContainerGap())
        );
    }// </editor-fold>//GEN-END:initComponents

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
        // TODO add your handling code here:
        Connection con=null;
        try {
            con=Access.getConnection();
            setList(con);
        } catch (Exception e) {
            JOptionPane.showMessageDialog(mn.MN.frame,e.getMessage());
            e.printStackTrace();
        }finally{
            try {
                if(con!=null){
                    con.close();
                }
            } catch (Exception e) {
                JOptionPane.showMessageDialog(mn.MN.frame,e.getMessage());
            }
        }
    }//GEN-LAST:event_jButton1ActionPerformed

    private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton2ActionPerformed
        // TODO add your handling code here:
try {
        JFileChooser chooser=new JFileChooser();
        chooser.showSaveDialog(null);
        File file=chooser.getSelectedFile();
        File headerfile=new File("header.png");
        BufferedImage header=ImageIO.read(headerfile);
        BufferedImage bi=new BufferedImage(header.getWidth(),this.tableauOperation1.getTable().getHeight()+this.tableauOperation1.getTable().getTableHeader().getHeight()+header.getHeight(),BufferedImage.TYPE_INT_RGB);
        Graphics g=bi.getGraphics();
        g.drawImage(header,0,0,null);
        g.setColor(Color.BLUE);
        Font f=new Font(Font.DIALOG,Font.PLAIN,20);
        g.setFont(f);
        g.drawString(fseur.getCode(),5,25);
        g.drawString(fseur.getNom()+" "+fseur.getPrenom(), 5,50);
        g.drawString(fseur.getRecuperation(), 5,75);
        g.translate(0,header.getHeight());
        tableauOperation1.getTable().getTableHeader().paint(g);
        g.translate(0, tableauOperation1.getTable().getTableHeader().getHeight());
        tableauOperation1.getTable().paint(g);
        g.dispose();
            ImageIO.write(bi,"png", file);
        } catch (Exception ex) {
            JOptionPane.showMessageDialog(mn.MN.frame,ex.getMessage());
            ex.printStackTrace();
        }
        JOptionPane.showMessageDialog(null,"Fait!");
    }//GEN-LAST:event_jButton2ActionPerformed

    private void jTextField2InputMethodTextChanged(java.awt.event.InputMethodEvent evt) {//GEN-FIRST:event_jTextField2InputMethodTextChanged
        // TODO add your handling code here:
    }//GEN-LAST:event_jTextField2InputMethodTextChanged

    private void jTextField2KeyReleased(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_jTextField2KeyReleased
        // TODO add your handling code here:
        try {
            if(!jTextField2.getText().isBlank()){
                Double reste=Double.valueOf(jTextField2.getText());
                Double difference=resteVirtuel-reste;
                diff.setText(String.format(Locale.FRANCE,"%,.0f",Math.abs(difference)));
                if(difference==0){
                    diff.setForeground(Color.GREEN);
                }else if(difference>0){
                    diff.setForeground(Color.ORANGE);
                }else{
                    diff.setForeground(Color.RED);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            diff.setText("Not a number");
        }
        this.revalidate();
    }//GEN-LAST:event_jTextField2KeyReleased


    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel Total;
    private javax.swing.JTextField codeInput;
    private com.github.lgooddatepicker.components.DatePicker datePicker1;
    private javax.swing.JLabel depense;
    private javax.swing.JLabel diff;
    private javax.swing.JLabel frais;
    private javax.swing.JLabel fseurContact;
    private javax.swing.JLabel fseurnom;
    private javax.swing.JButton jButton1;
    private javax.swing.JButton jButton2;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JTextField jTextField2;
    private javax.swing.JLabel lieuDeRecup;
    private javax.swing.JLabel restev;
    private mn.ui.commons.Tableau tableau1;
    private mn.ui.panels.OperationUI.TableauOperation tableauOperation1;
    private javax.swing.JLabel totalFrais;
    private javax.swing.JLabel totalSansFrais;
    // End of variables declaration//GEN-END:variables
    private void setToDate(){
        String date=this.datePicker1.getDateStringOrEmptyString();
        DepenseDetail tmp=new DepenseDetail();
        tmp.setDate(date);
        Connection con=null;
        try {
            List<DepenseDetail> deps=depensedata.findByExample(tmp);
            CustomModel model=new CustomModel(deps,DepenseDetail.class, depensedata);
            this.tableau1.initdata(model);
            con=Access.getConnection();
            Double depenseSomme=this.dataop.depenseTotal(date, con);
            Double fraisSomme=this.dataop.fraisTotal(date, con);
            this.depense.setText("DEPENSE : "+String.format(Locale.FRANCE,"%,.0f",depenseSomme)+" Ar");
            this.frais.setText("FRAIS : "+String.format(Locale.FRANCE,"%,.0f",fraisSomme)+" Ar");
            resteVirtuel=fraisSomme-depenseSomme;
            this.restev.setText("RESTE VIRTUEL : "+String.format(Locale.FRANCE,"%,.0f",resteVirtuel)+" Ar");
        } catch (Exception e) {
            JOptionPane.showMessageDialog(mn.MN.frame,e.getMessage());
            e.printStackTrace();
        }finally{
            if(con!=null){
            try {
                con.close();
            } catch (Exception e) {
                JOptionPane.showMessageDialog(mn.MN.frame,e.getMessage());
            }
        }
        }
    }
    @Override
    public void start() throws Exception {
        initComponents();
        dataop=new CustomDataOperation();
        dataf=new CustomDataFournisseur();
        this.depensedata=new Data();
        depensedata.init(DepenseDetail.class);
        this.datePicker1.setDateToToday();
        setToDate();
        this.datePicker1.addDateChangeListener((DateChangeEvent dce) -> {
            setToDate();
            revalidate();
        });
    }

    @Override
    public void setList(Connection con) throws Exception {
         try {
            String date=this.datePicker1.getDateStringOrEmptyString();
            String code=this.codeInput.getText();
            fseur=dataf.fseur(code, con);
            List<OperationDetail> ops=dataop.detailOf(fseur.getId(),date, con);
            this.tableauOperation1.init(ops, dataop,dataop.livreurdu(date, con), this);
            this.fseurnom.setText(fseur.getCode()+" "+fseur.getNom()+" "+fseur.getPrenom());
            this.fseurContact.setText(fseur.getContact());
            this.lieuDeRecup.setText(fseur.getRecuperation());
            this.Total.setText("TOTAL : "+String.format(Locale.FRANCE,"%,.0f",dataop.total(fseur.getId(), date, con))+" Ar");
            this.totalFrais.setText("TOTAL FRAIS : "+String.format(Locale.FRANCE,"%,.0f",dataop.fraisTotal(fseur.getId(), date, con))+" Ar");
            this.totalSansFrais.setText("TOTAL SANS FRAIS : "+String.format(Locale.FRANCE,"%,.0f",dataop.totalSansFrais(fseur.getId(), date, con))+" Ar");
        } catch (Exception e) {
            JOptionPane.showMessageDialog(mn.MN.frame,e.getMessage());
            e.printStackTrace();
        }finally{
             if(con!=null){
                 con.close();
             }
         }
    }
    
     private class CustomModel extends TableModel<DepenseDetail>{
        public CustomModel(List<DepenseDetail> list, Class<DepenseDetail> type, Data data) {
            super(list, type, data);
        }

        @Override
        public void setValueAt(Object aValue, int rowIndex, int columnIndex) {
            try {
                Data<Depense> dataDept=new Data<>();
                dataDept.init(Depense.class);
                Depense d=this.getModel(rowIndex);
                if(columnIndex==1){
                    NumberFormat formater=NumberFormat.getInstance(Locale.FRANCE);
                    d.setDepense(formater.parse(aValue.toString()).doubleValue());
                    dataDept.update(d);
                }else{
                    super.setData(depensedata);
                    super.setValueAt(aValue, rowIndex, columnIndex);
                }
            } catch (Exception e) {
                JOptionPane.showMessageDialog(mn.MN.frame,e.getMessage());
                e.printStackTrace();
            }finally{
                setToDate();
            }
        }
    }
}
