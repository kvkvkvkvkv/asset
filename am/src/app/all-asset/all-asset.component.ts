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
  assetDatas : Asset[];
 
  constructor(private router: Router, private assetService : AssetService) { }

  ngOnInit() {
    this.assetDatas = this.assetService.getAssets();
  }

  assetDetail(asset) {
    this.router.navigate(['/home', asset.id]);
  }

  assetDetail1(asset) {
    this.router.navigate(['/asset', asset.id, asset.title]);
  }
}
