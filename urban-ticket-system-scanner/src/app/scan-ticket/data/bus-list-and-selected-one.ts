import { GetBusNumber } from "./get-bus-numbers";

export interface BusListAndSelectedOne {
    availableBus: GetBusNumber[];
    selectedBus: GetBusNumber;
  }
  