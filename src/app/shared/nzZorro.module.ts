import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzRateModule,
    NzSelectModule,
    NzButtonModule,
    NzSwitchModule,
    NzDatePickerModule,
  ],
  exports:[
    CommonModule,
    NzRateModule,
    NzSelectModule,
    NzButtonModule,
    NzSwitchModule,
    NzDatePickerModule,
    
  ]
})
export class NzZorroModule { }
