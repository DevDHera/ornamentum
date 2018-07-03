import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTablePaginationComponent, PaginationUsageComponent } from './index';

import { DataTablePaginationRoutingModule } from './data-table-pagination-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table pagination module.
 * @class DataTablePaginationModule
 */
@NgModule({
  declarations: [
    DataTablePaginationComponent,
    PaginationUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTablePaginationRoutingModule
  ],
  providers: []
})
export class DataTablePaginationModule {
}
