/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package mn.ui.panels.OperationUI;

import java.awt.Color;
import java.awt.Component;
import java.util.List;
import javax.swing.DefaultCellEditor;
import javax.swing.JComboBox;
import javax.swing.JTable;
import javax.swing.table.DefaultTableCellRenderer;
import mn.Dao.CustomDataOperation;
import mn.model.Livreur;
import mn.model.OperationDetail;
import mn.ui.commons.Tableau;

/**
 *
 * @author Lars Ratovo
 */
public class TableauOperation extends Tableau<OperationDetail>{
    public void init(List<OperationDetail> list,CustomDataOperation data,List<Livreur> livreurs,CommandePanelModel commande) throws Exception{
        OperationModel model=new OperationModel(list, data,commande);
        this.initdata(model);
        this.more(livreurs);
    }
    
    
    private void more(List<Livreur> livreurs){
        JTable table=this.getTable();
        table.setDefaultRenderer(Object.class,new DefaultTableCellRenderer(){
            @Override
            public Component getTableCellRendererComponent(JTable table, Object value, boolean isSelected, boolean hasFocus, int row, int column) {
                Component c= super.getTableCellRendererComponent(table, value, isSelected, hasFocus, row, column);
                switch (getTmodel().getObjectOn(row).getEtat()) {
                    case 2 -> c.setBackground(new Color(133,193,233));
                    default -> c.setBackground(Color.YELLOW);
                }
                return c;
            }
            
        });
        JComboBox<Livreur> combox=new JComboBox<>();
        for(Livreur tmp:livreurs){
            combox.addItem(tmp);
        }
        table.getColumnModel().getColumn(8).setCellEditor(new DefaultCellEditor(combox));
        table.getColumnModel().getColumn(1).setPreferredWidth(2);
        table.getColumnModel().getColumn(7).setPreferredWidth(120);
        table.setAutoResizeMode(JTable.AUTO_RESIZE_ALL_COLUMNS);
    }
}
