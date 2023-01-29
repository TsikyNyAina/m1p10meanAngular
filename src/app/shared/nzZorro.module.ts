import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzTableModule } from 'ng-zorro-antd/table';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzRateModule,
    NzSelectModule,
    NzButtonModule,
    NzSwitchModule,
    NzDatePickerModule,
    NzInputModule,
    NzInputNumberModule,
    NzTableModule,
  ],
  exports:[
    CommonModule,
    NzRateModule,
    NzSelectModule,
    NzButtonModule,
    NzSwitchModule,
    NzDatePickerModule,
    NzInputModule,
    NzInputNumberModule,
    NzTableModule,
  ]
})
export class NzZorroModule { }
