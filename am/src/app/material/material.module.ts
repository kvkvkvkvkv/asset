import { NgModule } from '@angular/core';
import { MatButtonModule, MatGridListModule, MatCardModule, MatListModule, MatSelectModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatTabsModule} from '@angular/material';
import { ScrollingModule, ScrollDispatchModule } from '@angular/cdk/scrolling';

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
  MatInputModule,
  MatTabsModule,
  ScrollingModule,
  ScrollDispatchModule
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
