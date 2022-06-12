import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TicketData } from '../data/ticket-data';
import * as moment from 'moment';

@Component({
  selector: 'app-popup-ticket-validation',
  templateUrl: './popup-ticket-validation.component.html',
  styleUrls: ['./popup-ticket-validation.component.scss']
})
export class PopupTicketValidationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: TicketData) { }

  ngOnInit(): void {
  }

  details = [
    {title: 'Validated Time', selector: moment(this.data.validatedTime).format('YYYY-MM-DD HH:mm:ss')},
    {title: 'Validated in bus:', selector: this.data.validatedInBus},
    {title: 'Price', selector: (this.data.type.price/100).toFixed(2) + ' PLN'},
    {title: 'Reduction', selector: this.data.type.reduced ? 'Reduced price' : 'Standard price'},
    {title: 'Category', selector: this.data.type.displayName},
    {title: 'Duration', selector: this.data.type.minutesOfValidity != 0 ? this.data.type.minutesOfValidity + ' minutes' : 
      this.data.type.daysOfValidity + (this.data.type.daysOfValidity == 1 ? ' day':  ' days')},

  ]
}
