import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver/FileSaver';

@Component({
  selector: 'app-xml',
  templateUrl: './xml.component.html',
  styleUrls: ['./xml.component.css']
})
export class XmlComponent implements OnInit {
  username:any;
  public saveFile(name, type) {
    const blob = new Blob([this.username], { type: 'text/'+type });
    saveAs(blob, name);
  }
  constructor() { }

  ngOnInit() {
  }

}
