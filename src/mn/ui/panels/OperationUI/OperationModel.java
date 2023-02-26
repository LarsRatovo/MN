/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package mn.ui.panels.OperationUI;

import java.text.NumberFormat;
import java.util.List;
import javax.swing.JOptionPane;
import java.sql.Connection;
import mn.Dao.Access;
import mn.Dao.Data;
import mn.model.Livreur;
import mn.model.Operation;
import mn.model.OperationDetail;
import mn.ui.commons.TableModel;

/**
 *
 * @author Lars Ratovo
 */
public class OperationModel extends TableModel<OperationDetail>{
    CommandePanel commandePanel;
    public OperationModel(List<OperationDetail> list, Data data,CommandePanel main) {
        super(list, OperationDetail.class, data);
        this.commandePanel=main;
    }

    @Override
    public void setValueAt(Object aValue, int rowIndex, int columnIndex) {
        try {
            if(aValue!=null){
                Operation detail=this.getObjectOn(rowIndex).extractOperationFromSelf();
                if(columnIndex==7){
                    Livreur livreur=(Livreur)aValue;
                    detail.setLivreur(livreur.getId());
                }else if (columnIndex==9){
                    if((Boolean)aValue){
                        detail.setEtat(2);
                    }else{
                        detail.setEtat(0);
                    }
                }else if(columnIndex==4){
                    NumberFormat format=NumberFormat.getInstance();
                    detail.setPrixSansFrais(format.parse(aValue.toString()).doubleValue());
                }else if(columnIndex==5){
                    NumberFormat format=NumberFormat.getInstance();
                    detail.setPrix(format.parse(aValue.toString()).doubleValue());
                }
                Data<Operation> op=new Data<>();
                op.init(Operation.class);
                op.update(detail);
            }
            Connection con=Access.getConnection();
            commandePanel.setList(con);
            commandePanel.revalidate();
                    
            con.close();
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null,e.getMessage(),"Erreur",JOptionPane.ERROR_MESSAGE);
        }
    }

    @Override
    public Class<?> getColumnClass(int columnIndex) {
        if(columnIndex!=9){
            return super.getColumnClass(columnIndex); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/OverriddenMethodBody
        }
        return Boolean.class;
    }
}
