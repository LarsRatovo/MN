/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package mn.ui.panels.OperationUI;

import mn.ui.commons.ModelPanel;
import java.sql.Connection;

/**
 *
 * @author lars
 */
public abstract class CommandePanelModel extends ModelPanel{
    public abstract void setList(Connection con) throws Exception;
}
