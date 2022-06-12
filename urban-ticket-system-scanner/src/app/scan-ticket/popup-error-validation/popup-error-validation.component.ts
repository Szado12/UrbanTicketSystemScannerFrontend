import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-error-validation',
  templateUrl: './popup-error-validation.component.html',
  styleUrls: ['./popup-error-validation.component.scss']
})
export class PopupErrorValidationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: String) { }

  ngOnInit(): void {
  }

}
