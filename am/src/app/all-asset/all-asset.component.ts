import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

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
 
  constructor(private router: Router) { }

  ngOnInit() {
  }

  home() {
    alert("home")
  }

  getAssetById(asset:any) {
    this.toggleInfo = true;
    this.assetInformation = asset;
  }

  assetDetail(asset) {
    this.router.navigate(['/home', asset.title]);
  }

}
