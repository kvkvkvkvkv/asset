import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllAssetComponent } from './all-asset/all-asset.component';
import { AssetComponent } from './asset/asset.component';
import { AssetInfoComponent } from './asset-info/asset-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: AssetComponent},
  {path: 'home/:title', component: AssetInfoComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ AllAssetComponent];
