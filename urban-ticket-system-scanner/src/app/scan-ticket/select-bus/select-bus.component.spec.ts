import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { SelectBusComponent } from './select-bus.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

describe('SelectBusComponent', () => {
  let component: SelectBusComponent;
  let fixture: ComponentFixture<SelectBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBusComponent ],
      imports: [ MatDialogModule, BrowserAnimationsModule, MatAutocompleteModule  ], 
      providers: [    
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should filter buses', () => {
    component.buses = [{id: 1, busNumber: "1"}, {id: 2, busNumber: "2"}, {id: 12, busNumber: "12"}]
    
    fixture.detectChanges();

    expect(component._filter("1")).toEqual([{id: 1, busNumber: "1"}, {id: 12, busNumber: "12"}]);
  });
});
