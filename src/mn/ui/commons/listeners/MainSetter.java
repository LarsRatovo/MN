/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package mn.ui.commons.listeners;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JPanel;
import mn.ui.commons.ModelPanel;

/**
 *
 * @author Lars Ratovo
 */
public class MainSetter implements ActionListener{
    JPanel main;
    ModelPanel replacement;
    public MainSetter(JPanel main,ModelPanel replacement){
        this.main=main;
        this.replacement=replacement;
    }
    @Override
    public void actionPerformed(ActionEvent e) {
        this.main.removeAll();
        try {
            this.replacement.start();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        this.main.add(replacement);
        this.main.revalidate();
    }
    
}
