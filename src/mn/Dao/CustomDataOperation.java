/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package mn.Dao;

import mn.model.Operation;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import mn.model.Fournisseur;
import mn.model.Livreur;
import mn.model.OperationDetail;
import mn.model.OperationFournisseur;

/**
 *
 * @author Lars Ratovo
 */
public class CustomDataOperation extends Data<Operation>{
   public CustomDataOperation() throws Exception{
       super.init(Operation.class);
   }
    public void insert(Operation op,Connection con) throws Exception{
       String sql="INSERT INTO operation(fournisseur,type,prixSansFrais,prix,contact,lieu,dateHeure,ref,etat,observation) VALUES (?,?,?,?,?,?,?,?,?,?)";
       PreparedStatement statement=con.prepareStatement(sql);
       statement.setInt(1, op.getFournisseur());
       statement.setString(2,op.getType());
       if(op.getPrixSansFrais()==null){
            statement.setDouble(3,0);
       }else{
           statement.setDouble(3, op.getPrixSansFrais());
       }
       if(op.getPrix()==null){
        statement.setDouble(4,0);
       }else{
                   statement.setDouble(4,op.getPrix());
       }
       statement.setString(5,op.getContact());
       statement.setString(6,op.getLieu());
       statement.setString(7, op.getDateHeure());
       statement.setString(8, op.getRef());
       statement.setInt(9, op.getEtat());
       statement.setString(10, op.getObservation());
       statement.executeUpdate();
       statement.close();
   }
    public int countMax(Integer fournisseur,String date,Connection con) throws Exception{
        String sql="SELECT COUNT(*) FROM operation WHERE fournisseur = ? AND DATE(dateHeure)=DATE(?)";
        PreparedStatement statement=con.prepareStatement(sql);
        statement.setInt(1,fournisseur);
        statement.setString(2, date);
        System.out.println("sql "+statement.toString());
        ResultSet rs=statement.executeQuery();
        rs.next();
        int count=rs.getInt(1);
        rs.close();
        statement.close();
        return count;
    }
    public List<OperationFournisseur> operationDetails(String date,Connection con) throws Exception{
        ArrayList<OperationFournisseur> result=new ArrayList();
        CustomDataFournisseur fournisseurData=new CustomDataFournisseur();
        fournisseurData.init(Fournisseur.class);
        List<Fournisseur> fournisseurToday=fournisseurData.fseurof(date, con);
        for(Fournisseur tmp:fournisseurToday){
            OperationFournisseur opfseur=new OperationFournisseur();
            opfseur.setFournisseur(tmp);
            opfseur.setOperations(detailOf(tmp.getId(), date, con));
            result.add(opfseur);
        }
        return result;
    }
    public List<OperationDetail> detailOf(Integer fournisseur,String date,Connection con) throws Exception{
        Data<OperationDetail> tmpdata=new Data<>();
        tmpdata.init(OperationDetail.class);
        String sql="SELECT * FROM full_operation WHERE DATE(dateHeure)=DATE(?) AND fournisseur=?";
        PreparedStatement statement=con.prepareStatement(sql);
        statement.setString(1,date);
        statement.setInt(2,fournisseur);
        ResultSet rs=statement.executeQuery();
        return tmpdata.createList(rs);
    }
    public List<Livreur> livreurdu(String date,Connection con) throws Exception{
        String sql="SELECT * FROM livreur WHERE id IN (SELECT livreur FROM calendrier WHERE DATE(date)=DATE(?))";
        PreparedStatement statement=con.prepareStatement(sql);
        statement.setString(1,date);
        ResultSet rs=statement.executeQuery();
        Data<Livreur> livs=new Data<>();
        livs.init(Livreur.class);
        List<Livreur> lists=livs.createList(rs);
        rs.close();
        statement.close();
        return lists;
    }
}
