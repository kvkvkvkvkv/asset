import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssetComponent } from './asset/asset.component';
import { AllAssetComponent } from './all-asset/all-asset.component';
import { MaterialModule } from './material/material.module';
import { AssetInfoComponent } from './asset-info/asset-info.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AssetService } from './asset.service';
import { HeaderComponent } from './header/header.component';
import { CreateAssetComponent } from './create-asset/create-asset.component';
import { UpdateAssetComponent } from './update-asset/update-asset.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    AssetComponent,
    AllAssetComponent,
    AssetInfoComponent,
    NavComponent,
    routingComponents,
    PageNotFoundComponent,
    HeaderComponent,
    CreateAssetComponent,
    UpdateAssetComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [AssetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
