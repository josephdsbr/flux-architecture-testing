import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPanelInfoComponent } from './product-panel-info/product-panel-info.component';



@NgModule({
  declarations: [ProductPanelInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [ProductPanelInfoComponent]
})
export class ComponentsModule { }
