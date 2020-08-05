import { Component, OnInit } from '@angular/core';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.css']
})
export class CreateAssetComponent implements OnInit {

  

  constructor(private assetService : AssetService) { }

  ngOnInit() {
  }

  onSubmit(create) {
    var ele = {
      id : create.id,
      title : create.title,
      number : create.unit,
      desc : create.desc,
      img : "#"
    };
    this.assetService.setData(ele);
  }
}
