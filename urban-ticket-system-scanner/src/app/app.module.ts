import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScanTicketComponent } from './scan-ticket/scan-ticket.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PopupTicketValidationComponent } from './scan-ticket/popup-ticket-validation/popup-ticket-validation.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ScanTicketComponent,
    PopupTicketValidationComponent
  ],
  imports: [
    BrowserModule,
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule,
		MatDialogModule,
		ZXingScannerModule,
    AppRoutingModule
  ],
  providers: [ { provide: 'BASE_API_URL', useValue: 'http://localhost:8080' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
