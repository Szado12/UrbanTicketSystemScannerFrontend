import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { PostScanTicket } from '../data/post-scan-ticket';

@Injectable({
  providedIn: 'root'
})
export class ScanTicketService {

  constructor(
  private readonly http: HttpClient, 
  @Inject('BASE_API_URL') private baseUrl: string) {}

  
  scanTicketUrl:string = "/ticket/validate";

  scanTicket(data:PostScanTicket){
    console.log(this.baseUrl+this.scanTicketUrl);
    return this.http.put(this.baseUrl+this.scanTicketUrl,data);
  }
}
