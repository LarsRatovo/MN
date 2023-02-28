/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package mn;

import java.time.LocalDateTime;

/**
 *
 * @author lars
 */
public class Test {
    public static void main(String[] args) {
        String test="2023-02-24T02:00";
        LocalDateTime datetime=LocalDateTime.parse(test);
        System.out.println(datetime.getHour());
    }
}
