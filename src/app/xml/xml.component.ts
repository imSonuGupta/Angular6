import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver/FileSaver';
import { Http, Request, Response, Headers, RequestOptionsArgs, RequestMethod } from '@angular/http';

@Component({
  selector: 'app-xml',
  templateUrl: './xml.component.html',
  styleUrls: ['./xml.component.css']
})
export class XmlComponent implements OnInit {
  username:any;
  // public saveFile(name, type) {
  //   const blob = new Blob([this.username], { type: 'text/'+type });
  //   saveAs(blob, name);
  // }
  constructor(private _http: Http) { 
   
  }

  public getUser(name, type) {
    this._http.get('http://localhost:3000/api/users').subscribe((results) => {
      this.username = results.json().data[0].name;
    })
  }
  ngOnInit() {
  }

}
