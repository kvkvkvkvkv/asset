import { NgModule } from '@angular/core';
import { MatButtonModule, MatGridListModule, MatCardModule, MatListModule, MatSelectModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule} from '@angular/material';

const MaterialComponents = [
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule
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
