import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllAssetComponent } from './all-asset/all-asset.component';
// import { AssetComponent } from './asset/asset.component';
import { AssetInfoComponent } from './asset-info/asset-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateAssetComponent } from './create-asset/create-asset.component';
import { UpdateAssetComponent } from './update-asset/update-asset.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'asset', component: AllAssetComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'asset/:id/:title', component: AssetInfoComponent },
  { path: 'asset/:id/:title/update', component: UpdateAssetComponent },
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
