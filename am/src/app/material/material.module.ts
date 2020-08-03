import { NgModule } from '@angular/core';
import { MatButtonModule, MatGridListModule, MatCardModule, MatListModule, MatSelectModule, MatSidenavModule} from '@angular/material';

const MaterialComponents = [
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule
];

@NgModule({
  declarations: [],
  imports: [
    MaterialComponents,
  ],
  exports: [
    MaterialComponents,
  ]
})
export class MaterialModule { }
