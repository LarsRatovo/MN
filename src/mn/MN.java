/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package mn;

import java.awt.GraphicsDevice;
import java.awt.GraphicsEnvironment;
import javax.swing.JFrame;
import mn.ui.Main;

/**
 *
 * @author Lars Ratovo
 */
public class MN {
    public static JFrame frame;
    public MN(){
        GraphicsEnvironment graphics =GraphicsEnvironment.getLocalGraphicsEnvironment();
        GraphicsDevice device = graphics.getDefaultScreenDevice();
        frame=new JFrame();
        frame.setUndecorated(true);
        frame.setResizable(false);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        Main m=new Main();
        frame.add(m);
        frame.revalidate();
        device.setFullScreenWindow(frame);
    }
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws Exception{
        MN mn=new MN();
    }    
}
