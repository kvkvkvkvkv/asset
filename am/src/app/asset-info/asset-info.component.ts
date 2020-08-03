import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-asset-info',
  templateUrl: './asset-info.component.html',
  styleUrls: ['./asset-info.component.css']
})
export class AssetInfoComponent implements OnInit {
  
  assetInfo : any;
  @Input() info : any;
  @Output() home = new EventEmitter();

  constructor(private location: Location) { }

  ngOnInit() {
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

}
