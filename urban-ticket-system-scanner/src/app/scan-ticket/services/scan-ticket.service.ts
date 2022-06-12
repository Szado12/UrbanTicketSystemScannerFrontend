import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PostScanTicket } from '../data/post-scan-ticket';
import { TicketData } from '../data/ticket-data';

@Injectable({
  providedIn: 'root'
})
export class ScanTicketService {

  constructor(
  private readonly http: HttpClient, 
  @Inject('BASE_API_URL') private baseUrl: string) {}

  
  scanTicketUrl:string = "/ticket/validate";

  scanTicket(data:PostScanTicket) : Observable<TicketData>{
    return this.http.put<TicketData>(this.baseUrl+this.scanTicketUrl,data);
  }
}
