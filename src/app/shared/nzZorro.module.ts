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
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

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
    NzModalModule,
    NzTabsModule,
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
    NzModalModule,
    NzTabsModule,
  ]
})
export class NzZorroModule { }
