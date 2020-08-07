import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-asset-info',
  templateUrl: './asset-info.component.html',
  styleUrls: ['./asset-info.component.css']
})
export class AssetInfoComponent implements OnInit {
  
  assetInfo : any;
  id : number;
  @Input() info : any;
  @Output() home = new EventEmitter();
  assestData = [];
  ass : any;

  constructor(private location: Location, private router: ActivatedRoute, private assetService: AssetService, private routing: Router) { }

  ngOnInit() {
    let id = parseInt(this.router.snapshot.paramMap.get('id'));
    this.id = id;
    this.assestData = this.assetService.getAssets();
    this.ass = this.getData();
  }

  getData() {
    return this.assestData.find(element => element.id == this.id);
  }

  getAssetById(asset:any) {
    this.assetInfo = asset;
  }

  goHome() {
    this.home.emit();
  }

 
    homeb() {
        this.location.back();
    }

  updateAsset() {
    this.routing.navigate(['update'],{relativeTo:this.router});
  }

  
}
