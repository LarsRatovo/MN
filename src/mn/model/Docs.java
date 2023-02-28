/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package mn.model;
import com.itextpdf.text.Document;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

/**
 *
 * @author lars
 */
public class Docs {
    List<OperationDetail> data;
    Document output;
    OutputStream outputStream;
    String filename;
    String path;
    Livreur main;
    public Docs(List<OperationDetail> data,Livreur livreur) throws Exception{
        this.data=data;
        this.main=livreur;
        output=new Document();
        filename=LocalDateTime.now().toString()+".pdf";
        File fl=new File(filename.replace(".","."));
        path=fl.getAbsolutePath();
        outputStream=new FileOutputStream(fl);
        PdfWriter.getInstance(output, outputStream);
        output.open();
        output.addAuthor("MN Livraison");
    }
    private void addName()throws Exception{
        Paragraph name=new Paragraph();
        name.setAlignment(Element.ALIGN_CENTER);
        Font f=new Font(Font.FontFamily.TIMES_ROMAN,25,Font.BOLD);
        name.setFont(f);
        name.add(main.getId()+" - "+main.getNom());
        output.add(name);
    }
    private void addDate() throws Exception{
        SimpleDateFormat sf=new SimpleDateFormat("dd - MM - yyyy");
        Paragraph date=new Paragraph("Date : "+sf.format(Date.from(Instant.now())));
        date.setSpacingAfter(50F);
        output.add(date);
    }
    private void addNumber() throws Exception{
        Paragraph phone=new Paragraph();
        phone.add("MN Livraison : 034 69 758 54 / 032 29 070 39");
        output.add(phone);
    }
    private void addTable() throws Exception{
        PdfPTable table=new PdfPTable(7);
        table.setWidthPercentage(100);
        table.setPaddingTop((float)100);
        String[] cols={"Ref","Heure","Lieu","Contact","R/L","Obs","Prix"};
        for(String tmp:cols){
            PdfPCell cell=new PdfPCell(new Paragraph(tmp));
            table.addCell(cell);
        }
        Font f=new Font(Font.FontFamily.HELVETICA,10);
        for(OperationDetail tmp:data){
            PdfPCell ref=new PdfPCell(new Phrase(tmp.getRef(),f));
            PdfPCell heure=new PdfPCell(new Phrase(tmp.getDateTime().format(DateTimeFormatter.ofPattern("HH:mm")),f));
            PdfPCell lieu=new PdfPCell(new Phrase(tmp.getLieu(),f));
            PdfPCell contact=new PdfPCell(new Phrase(tmp.getContact(),f));
            PdfPCell type=new PdfPCell(new Phrase(tmp.getType(),f));
            PdfPCell obs=new PdfPCell(new Phrase(tmp.getObservation(),f));
            PdfPCell prix=new PdfPCell(new Phrase(tmp.formatedPrixAvecFrais()+" Ar",f));
            table.addCell(ref);
            table.addCell(heure);
            table.addCell(lieu);
            table.addCell(contact);
            table.addCell(type);
            table.addCell(obs);
            table.addCell(prix);
        }
        table.setSpacingAfter(50f);
        output.add(table);
    }
    public void initAndDo() throws Exception{
        addName();
        addDate();
        addTable();
        addNumber();
        output.close();
        outputStream.close();
    }
    public String getPath(){
        return this.path;
    }
}
