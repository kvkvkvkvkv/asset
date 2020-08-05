import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllAssetComponent } from './all-asset/all-asset.component';
import { AssetComponent } from './asset/asset.component';
import { AssetInfoComponent } from './asset-info/asset-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateAssetComponent } from './create-asset/create-asset.component';
import { UpdateAssetComponent } from './update-asset/update-asset.component';


const routes: Routes = [
  { path: '', redirectTo: '/asset', pathMatch: 'full' },
  { path: 'asset', component: AssetComponent },
  { path: 'home/:id/', component: AssetInfoComponent },
  {
    path: 'asset/:id/:title',
    component: AssetInfoComponent,
    children: [
      { path: 'update', component: UpdateAssetComponent }
    ]
  },
  { path: 'asset/create', component: CreateAssetComponent },
  { path: 'asset/update', component: UpdateAssetComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AllAssetComponent];
