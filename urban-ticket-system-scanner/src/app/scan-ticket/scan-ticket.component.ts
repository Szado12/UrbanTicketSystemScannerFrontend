import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostScanTicket } from './data/post-scan-ticket';
import { PopupTicketValidationComponent } from './popup-ticket-validation/popup-ticket-validation.component';
import { ScanTicketService } from './services/scan-ticket.service';
import { faBus, faCaretSquareDown, faGear} from '@fortawesome/free-solid-svg-icons';
import { QrCodeScannerComponent } from './qr-code-scanner/qr-code-scanner.component';
import { SelectBusComponent } from './select-bus/select-bus.component';
import { GetBusNumber } from './data/get-bus-numbers';
import { BusListAndSelectedOne } from './data/bus-list-and-selected-one';
import { PopupErrorValidationComponent } from './popup-error-validation/popup-error-validation.component';

@Component({
  selector: 'app-scan-ticket',
  templateUrl: './scan-ticket.component.html',
  styleUrls: ['./scan-ticket.component.scss']
})
export class ScanTicketComponent implements OnInit {

  constructor(private scanTicketService: ScanTicketService, public dialog: MatDialog) { }


  faBus = faBus;
  faCaretSquareDown = faCaretSquareDown;
  faGear = faGear;

  ticketCode:string = "";
  buses:GetBusNumber[] = [{id:1,busNumber:"1"}, {id:2,busNumber:"2"}, {id:3,busNumber:"3"},{id:4,busNumber:"4"}];
  selectedBus:GetBusNumber = this.buses[0];

  ngOnInit(): void {
  }

  openQrCodeScanner(){
    const qrCodeSannerDialog = this.dialog.open(QrCodeScannerComponent);

    qrCodeSannerDialog.afterClosed().subscribe(res => {
      console.log(res);
      this.ticketCode = res;
    });
  }

  openSettings(){
    const selectedBusDialog = this.dialog.open(SelectBusComponent,{data: {availableBus:this.buses, selectedBus:this.selectedBus} as BusListAndSelectedOne});

    selectedBusDialog.afterClosed().subscribe(res => {
      if(res != null){
        this.selectedBus = res;
        console.log(res);
        console.log(typeof(res));
      }
    });
  }

  scanTicket(){
    if(this.ticketCode == "")
      console.log("wypełnij dane");
    else
    this.scanTicketService.scanTicket({ticketUuid:this.ticketCode, validatedInBus:this.selectedBus.id} as PostScanTicket)
    .subscribe(res => 
      {
        this.dialog.open(PopupTicketValidationComponent,{data : res});
      },
       error => {
        var errorMessage = error.error;
        if(errorMessage == "No value present")
          errorMessage = "Wrong ticket code";

        this.dialog.open(PopupErrorValidationComponent,{data:errorMessage});
      })
  }
}
