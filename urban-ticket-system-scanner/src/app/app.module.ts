import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScanTicketComponent } from './scan-ticket/scan-ticket.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PopupTicketValidationComponent } from './scan-ticket/popup-ticket-validation/popup-ticket-validation.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { SelectBusComponent } from './scan-ticket/select-bus/select-bus.component';
import { QrCodeScannerComponent } from './scan-ticket/qr-code-scanner/qr-code-scanner.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { PopupErrorValidationComponent } from './scan-ticket/popup-error-validation/popup-error-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    ScanTicketComponent,
    PopupTicketValidationComponent,
    SelectBusComponent,
    QrCodeScannerComponent,
    PopupErrorValidationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
		HttpClientModule,
    MatAutocompleteModule,
		ReactiveFormsModule,
		FontAwesomeModule,
		FormsModule,
		MatDialogModule,
		ZXingScannerModule,
    AppRoutingModule
  ],
  providers: [ { provide: 'BASE_API_URL', useValue: 'http://localhost:8080' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
