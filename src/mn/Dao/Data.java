package mn.Dao;

import mn.Dao.annotation.Key;
import mn.Dao.annotation.Table;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class Data<M>{
    private Class<M> type;
    private List<Field> fields;

    public void init(Class<M> type){
        this.type=type;
        Class tmp=type;
        fields=new ArrayList<>();
        while (tmp!=null) {
            for(Field f:tmp.getDeclaredFields()){
                fields.add(f);
            }
            tmp=tmp.getSuperclass();
        }
    }
    public List<M> getAll(Connection con) throws SQLException, NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {
        Table table=type.getAnnotation(Table.class);
        String sql="SELECT * FROM "+table.value();
        Statement st=con.createStatement();
        ResultSet rs=st.executeQuery(sql);
        return createList(rs);
    }
    public List<M> getAll(String tablename) throws Exception{
        Connection con=Access.getConnection();
        String sql="SELECT * FROM "+tablename;
        Statement st=con.createStatement();
        ResultSet rs=st.executeQuery(sql);
        return createList(rs);
    }
    public List<M> getAll() throws SQLException, InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException {
        Connection con=Access.getConnection();
        List<M> list=this.getAll(con);
        con.close();
        return list;
    }
    public void save(M object) throws IllegalAccessException, SQLException {
        Connection con=Access.getConnection();
        Table table=this.type.getAnnotation(Table.class);
        String sql="INSERT INTO "+table.value();
        String column="(";
        for(int i=0;i<fields.size();i++){
            if(!fields.get(i).isAnnotationPresent(Key.class)){
                column+=fields.get(i).getName();
                column+=",";
            }
        }
        column=column.substring(0,column.length()-1);
        column+=") VALUES ";
        sql+=column;
        String values="(";
        for(int i=0;i< fields.size();i++){
            if(!fields.get(i).isAnnotationPresent(Key.class)){
                fields.get(i).setAccessible(true);
                values+="?";
                values+=",";
            }
        }
        values=values.substring(0,values.length()-1);
        values+=")";
        sql+=values;
        PreparedStatement statement= con.prepareStatement(sql);
        int id=1;
        for(int i=0;i<fields.size();i++){
            if(!fields.get(i).isAnnotationPresent(Key.class)){
                statement.setObject(id,fields.get(i).get(object));
                id++;
            }
        }
        statement.executeUpdate();
        con.close();
    }
    public List<M> findByExample(M model) throws IllegalAccessException, SQLException, NoSuchMethodException, InvocationTargetException, InstantiationException {
        Connection connection=Access.getConnection();
        Table table=this.type.getAnnotation(Table.class);
        String sql="SELECT * FROM "+table.value()+" WHERE 1=1 ";
        String criterie="";
        for(int i=0;i<this.fields.size();i++){
            fields.get(i).setAccessible(true);
            if(fields.get(i).get(model)!=null){
                criterie+=" AND "+fields.get(i).getName()+"=? ";
            }
        }
        sql+=criterie;
        PreparedStatement st=connection.prepareStatement(sql);
        int id=1;
        for(int i=0;i<this.fields.size();i++){
            fields.get(i).setAccessible(true);
            if(fields.get(i).get(model)!=null){
                st.setObject(id,fields.get(i).get(model));
                id++;
            }
        }
        ResultSet rs=st.executeQuery();
        return createList(rs);
    }
    public void update(M model) throws IllegalAccessException, SQLException {
        Connection con=Access.getConnection();
        Table t=this.type.getAnnotation(Table.class);
        String sql="UPDATE "+t.value()+" SET ";
        String criterie="";
        Field key=null;
        for(int i=0;i<this.fields.size();i++){
            if(fields.get(i).isAnnotationPresent(Key.class)){
                key=fields.get(i);
            }
        }
        key.setAccessible(true);
        if(key==null||key.get(model)==null){
            throw new IllegalAccessException();
        }
        for(int i=0;i<this.fields.size();i++){
            if(!fields.get(i).equals(key)){
                fields.get(i).setAccessible(true);
                if(fields.get(i).get(model)!=null){
                    criterie+=fields.get(i).getName()+"= ? ,";
                }
            }
        }
        criterie=criterie.substring(0,criterie.length()-1);
        sql+=criterie+ " WHERE "+key.getName()+"=?";
        PreparedStatement st=con.prepareStatement(sql);
        int id=1;
        for(int i=0;i<this.fields.size();i++){
            if(!fields.get(i).equals(key)){
                fields.get(i).setAccessible(true);
                if(fields.get(i).get(model)!=null){
                    st.setObject(id,fields.get(i).get(model));
                    id++;
                }
            }
        }
        st.setObject(id,key.get(model));
        st.executeUpdate();
    }
    protected List<M> createList(ResultSet rs) throws SQLException, NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {
        ArrayList<M> result=new ArrayList<>();
        Constructor<M> constructor=type.getConstructor(null);
        while (rs.next()){
            M tmp=constructor.newInstance(null);
            for(int i=0;i<fields.size();i++){
                fields.get(i).setAccessible(true);
                fields.get(i).set(tmp,rs.getObject(fields.get(i).getName()));
            }
            result.add(tmp);
        }
        return result;
    }
    public void remove(M model) throws Exception{
        Table table=this.type.getAnnotation(Table.class);
        Field key=null;
        for(Field tmp:this.type.getDeclaredFields()){
            if(tmp.isAnnotationPresent(Key.class)){
                key=tmp;
                break;
            }
        }
        key.setAccessible(true);
        String sql=" DELETE FROM "+table.value()+" WHERE "+key.getName()+"='"+key.get(model)+"'";
        Connection con=Access.getConnection();
        con.createStatement().execute(sql);
        con.close();
    }
}
