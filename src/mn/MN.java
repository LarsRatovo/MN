/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package mn;

import java.awt.Toolkit;
import javax.swing.JFrame;
import mn.ui.Main;

/**
 *
 * @author Lars Ratovo
 */
public class MN {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws Exception{
        JFrame frame=new JFrame();
        frame.setSize(Toolkit.getDefaultToolkit().getScreenSize());
        frame.setVisible(true);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        
        Main m=new Main();
        frame.add(m);
        frame.revalidate();
    }    
}
