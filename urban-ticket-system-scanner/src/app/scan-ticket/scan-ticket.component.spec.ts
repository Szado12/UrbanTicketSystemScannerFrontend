import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ScanTicketComponent } from './scan-ticket.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ScanTicketComponent', () => {
  let component: ScanTicketComponent;
  let fixture: ComponentFixture<ScanTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanTicketComponent ],
      imports: [HttpClientTestingModule, MatDialogModule, BrowserAnimationsModule  ], 
      providers: [ { provide: 'BASE_API_URL', useValue: 'https://urban-ticket-system-backend.herokuapp.com' }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call openQrCodeScanner on "use qr code" click', () => {
    spyOn(component, 'openQrCodeScanner').and.returnValue();
    fixture.debugElement.query(By.css('.qrCode')).nativeElement.click();
    fixture.detectChanges();

    expect(component.openQrCodeScanner).toHaveBeenCalled();
  });

  it('should call openSettings on "use qr code" click', () => {
    spyOn(component, 'openSettings').and.returnValue();
    fixture.debugElement.query(By.css('fa-icon')).nativeElement.click();
    fixture.detectChanges();

    expect(component.openSettings).toHaveBeenCalled();
  });

  it('should call scanTicket on "use qr code" click', () => {
    spyOn(component, 'scanTicket').and.returnValue();
    fixture.debugElement.query(By.css('.btn.btn-primary')).nativeElement.click();
    fixture.detectChanges();

    expect(component.scanTicket).toHaveBeenCalled();
  });
});
