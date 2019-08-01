import { NgModule } from '@angular/core';
import {
  MatDatetimepickerModule,
  MatNativeDatetimeModule
} from '@mat-datetimepicker/core';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatCardModule, MatIconModule, MatDatepickerModule } from '@angular/material';

import { LibFormColorComponent } from './form-color.component';
import { LibFormDateComponent } from './form-date.component';
import { LibFormTimeComponent } from './form-time.component';
import { CommonModule } from '@angular/common';

const exported = [
  LibFormColorComponent,
  LibFormDateComponent,
  LibFormTimeComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDatetimeModule,
    MatDatetimepickerModule,
    ColorPickerModule
  ],
  exports: [...exported],
  declarations: [...exported],
  providers: []
})
export class MatReduceFormsUsing3rdPartyModule {}
