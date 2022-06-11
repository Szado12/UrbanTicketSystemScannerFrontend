import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopupTicketValidationComponent } from './scan-ticket/popup-ticket-validation/popup-ticket-validation.component';
import { ScanTicketComponent } from './scan-ticket/scan-ticket.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/scan-ticket',
  },
  {
    path: 'scan-ticket2',
    component: PopupTicketValidationComponent,
  },
  {
    path: 'scan-ticket',
    component: ScanTicketComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
