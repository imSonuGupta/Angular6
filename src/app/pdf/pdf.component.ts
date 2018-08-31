import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  @ViewChild('main') main: ElementRef;
  imgPath:any = "../assets/images/logo.png";
  
  constructor() { }
  ngOnInit() {
  }
   public getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    console.log(img.height, img.width);
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
  }

   public downloadPdf() {
     let doc = new jsPDF('p', 'pt', 'a4');
     let imageData = this.getBase64Image(document.getElementById('imgId'));
     doc.addImage(imageData, "png", 1000, 10);

     let elementHandler = {
       '#editor': function(element, renderer) {
         return true;
       }
     };

     let content = this.main.nativeElement;
     doc.fromHTML(content.innerHTML, 15, 15, {
       'width':190,
       'elementHandlers':elementHandler
     }, function(){
      doc.save('test.pdf');
     });
   }
}
