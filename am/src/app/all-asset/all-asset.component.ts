import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AssetService, Asset } from '../asset.service';

@Component({
  selector: 'app-all-asset',
  templateUrl: './all-asset.component.html',
  styleUrls: ['./all-asset.component.css']
})
export class AllAssetComponent implements OnInit {

  title : string;
  @Input() assetData : any;
  toggleInfo : boolean = false;
  assetInformation : any;
  assetDatas : Asset[];
 
  constructor(private router: Router, private assetService : AssetService) { }

  ngOnInit() {
    this.assetDatas = this.assetService.getAssets();
  }

  home() {
    alert("home")
  }

  getAssetById(asset:any) {
    this.toggleInfo = true;
    this.assetInformation = asset;
  }

  assetDetail(asset) {
    this.router.navigate(['/home', asset.id]);
  }

  assetDetail1(asset) {
    this.router.navigate(['/asset', asset.id, asset.title]);
  }
}
