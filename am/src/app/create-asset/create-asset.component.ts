import { Component, OnInit } from '@angular/core';
import { AssetService, Asset } from '../asset.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.css']
})
export class CreateAssetComponent implements OnInit {

  constructor(private assetService : AssetService, private route: Router) { }

  ngOnInit() {
  }

  onSubmit(create) {
    var ele = create;
    ele.id = this.assetService.getAssets().length + 1;
    ele.img = "#";
    ele.number = create.unit;
    this.assetService.setData(ele);
    this.route.navigateByUrl('/asset');
  }
}
