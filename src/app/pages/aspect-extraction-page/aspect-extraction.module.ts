import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import modul FormsModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

const materialModules = [
  MatFormFieldModule,
];

@NgModule({
  imports: [FormsModule , CommonModule, ...materialModules],
  exports: [...materialModules],
})

export class  AspectExtractionPageModule {

}
