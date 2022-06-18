import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs/operators';
import { BusListAndSelectedOne } from '../data/bus-list-and-selected-one';
import { GetBusNumber } from '../data/get-bus-numbers';

@Component({
  selector: 'app-select-bus',
  templateUrl: './select-bus.component.html',
  styleUrls: ['./select-bus.component.scss']
})
export class SelectBusComponent implements OnInit {
  control = new FormControl('');
  filteredBuses: Observable<GetBusNumber[]>;
  buses : GetBusNumber[];
  selectedBus:GetBusNumber;


  constructor(@Inject(MAT_DIALOG_DATA) public data: BusListAndSelectedOne) {
    this.buses = data.availableBus;
    this.selectedBus = data.selectedBus;
   }

   ngOnInit() {
    this.filteredBuses = this.control.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value?.name)),
      map(name => (name ? this._filter(name) : this.buses.slice())),
    );
  }

  displayFn(bus: GetBusNumber): string {
    return bus && bus.busNumber ? bus.busNumber : '';
  }

  _filter(str: string): GetBusNumber[] {
    const filterValue = str.toLowerCase();
    return this.buses.filter(bus => bus.busNumber.toLowerCase().includes(filterValue));
  }

}
