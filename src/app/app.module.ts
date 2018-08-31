import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PdfComponent } from './pdf/pdf.component';
import { XmlComponent } from './xml/xml.component';
import { RouterModule } from '@angular/router';
import { CommonComponent } from './common/common.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule} from '@angular/material';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    PdfComponent,
    XmlComponent,
    CommonComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    RouterModule.forRoot([
      {path: '', component: CommonComponent},
      {path: 'pdf', component: PdfComponent},
      {path: 'xml', component: XmlComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
