package mn.Dao;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Access {
    String file="mn.db";
    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection("jdbc:sqlite:mn.db");
    }
}
