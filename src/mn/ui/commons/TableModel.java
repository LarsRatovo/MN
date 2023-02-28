/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package mn.ui.commons;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import javax.swing.table.AbstractTableModel;
import mn.Dao.Data;

/**
 *
 * @author Lars Ratovo
 */
public class TableModel<M> extends AbstractTableModel{
    List<Field> cols;
    List<Method> methods;
    List<M> list;
    Data<M> data;
    public TableModel(List<M> list,Class<M> type,Data data){
        this.list=list;
        this.methods=new ArrayList<>();
        this.cols=new ArrayList<>();
        ArrayList<Field> declared=new ArrayList<>();
        Class temp=type;
        while (temp!=null) {            
            declared.addAll(Arrays.asList(temp.getDeclaredFields()));
            temp=temp.getSuperclass();
        }
        for(Field tmp:declared){
            if(tmp.isAnnotationPresent(View.class)){
               cols.add(tmp);
            }
        }
        temp=type;
        ArrayList<Method> methodst=new ArrayList<>();
        while (temp!=null) {            
            methodst.addAll(Arrays.asList(temp.getDeclaredMethods()));
            temp=temp.getSuperclass();
        }
        for(Method tmp:methodst){
            if(tmp.isAnnotationPresent(View.class)){
                this.methods.add(tmp);
            }
        }
        this.data=data;
    }
    public M getObjectOn(int index){
        return this.getList().get(index);
    }
    @Override
    public int getRowCount() {
        return this.getList().size();
    }

    @Override
    public int getColumnCount() {
        return this.getCols().size()+this.getMethods().size();
    }

    @Override
    public String getColumnName(int columnIndex) {
        for(Field tmp:getCols()){
            View view=tmp.getAnnotation(View.class);
            if(columnIndex==view.rang()){
                return view.value();
            }
        }
        for(Method tmp:getMethods()){
            View view=tmp.getAnnotation(View.class);
            if(columnIndex==view.rang()){
                return view.value();
            }
        }
        return "Column name not found";
    }
    @Override
    public Object getValueAt(int rowIndex, int columnIndex) {
        M tempModel=getList().get(rowIndex);
        for(Field tmp:getCols()){
            View view=tmp.getAnnotation(View.class);
            if(columnIndex==view.rang()){
                tmp.setAccessible(true);
                try {
                    return tmp.get(tempModel);
                } catch (Exception ex) {
                    ex.printStackTrace();
                }
            }
        }
        for(Method tmp:getMethods()){
            View view=tmp.getAnnotation(View.class);
            if(columnIndex==view.rang()){
                tmp.setAccessible(true);
                try {
                    return tmp.invoke(tempModel,null);
                } catch (Exception ex) {
                    ex.printStackTrace();
                }
            }
        }
        return "Object not found or exception raised";
    }    
    @Override
    public boolean isCellEditable(int rowIndex, int columnIndex) {
        for(Field tmp:getCols()){
            View view=tmp.getAnnotation(View.class);
            if(columnIndex==view.rang()){
               return view.changeable();
            }
        }
        for(Method tmp:getMethods()){
            View view=tmp.getAnnotation(View.class);
            if(columnIndex==view.rang()){
                return view.changeable();
            }
        }
        return false;
    }

    @Override
    public void setValueAt(Object aValue, int rowIndex, int columnIndex) {
        for(Field tmp:getCols()){
            View view=tmp.getAnnotation(View.class);
            if(columnIndex==view.rang()){
                tmp.setAccessible(true);
                try {
                    M model=getList().get(rowIndex);
                    tmp.set(model, aValue);
                    getData().update(model);
                } catch (Exception ex) {
                    ex.printStackTrace();
                }
            }
        }
    }

    /**
     * @return the cols
     */
    public List<Field> getCols() {
        return cols;
    }

    /**
     * @param cols the cols to set
     */
    public void setCols(List<Field> cols) {
        this.cols = cols;
    }

    /**
     * @return the methods
     */
    public List<Method> getMethods() {
        return methods;
    }

    /**
     * @param methods the methods to set
     */
    public void setMethods(List<Method> methods) {
        this.methods = methods;
    }
    public M getModel(int index){
        return this.list.get(index);
    }
    /**
     * @return the list
     */
    public List<M> getList() {
        return list;
    }

    /**
     * @param list the list to set
     */
    public void setList(List<M> list) {
        this.list = list;
    }

    /**
     * @return the data
     */
    public Data<M> getData() {
        return data;
    }

    /**
     * @param data the data to set
     */
    public void setData(Data<M> data) {
        this.data = data;
    }
    
}
