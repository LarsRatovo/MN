/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package mn.Dao;

import mn.model.Fournisseur;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

/**
 *
 * @author Lars Ratovo
 */
public class CustomDataFournisseur extends Data<Fournisseur>{
    public CustomDataFournisseur() throws Exception{
        this.init(Fournisseur.class);
    }
    public Fournisseur fseur(String code) throws Exception{
        Connection con=Access.getConnection();
        String sql="SELECT * FROM fournisseur WHERE UPPER('MN'||id)=UPPER(?)";
        PreparedStatement statement=con.prepareStatement(sql);
        statement.setString(1, code);
        ResultSet rs=statement.executeQuery();
        List<Fournisseur> data=this.createList(rs);
        Fournisseur fseur=data.get(0);
        rs.close();
        statement.close();
        con.close();
        return fseur;
    }
    public List<Fournisseur> fseurof(String date,Connection con) throws Exception{
        String sql="SELECT * FROM fournisseur WHERE id IN (SELECT fournisseur FROM operation WHERE DATE(dateHeure)=DATE(?))";
        PreparedStatement statement=con.prepareStatement(sql);
        statement.setString(1,date);
        ResultSet rs=statement.executeQuery();
        List<Fournisseur> data=this.createList(rs);
        rs.close();
        statement.close();
        return data;
    }
}
