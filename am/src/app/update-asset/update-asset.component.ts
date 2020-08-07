import { Component, OnInit } from '@angular/core';
import { Asset, AssetService } from '../asset.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-asset',
  templateUrl: './update-asset.component.html',
  styleUrls: ['./update-asset.component.css']
})
export class UpdateAssetComponent implements OnInit {

  data : Asset;
  assetList : Asset[];
  updateData : Asset;
  constructor(private activatedRoute: ActivatedRoute, private service : AssetService, private route : Router) { }

  ngOnInit() {
    let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    let title = this.activatedRoute.snapshot.paramMap.get('title');
    this.assetList = this.service.getAssets();
    this.data = this.assetList.find(ele => ele.id == id);
  }

  onSubmit(update){
    this.updateData = update;
    this.updateData.id = this.data.id;
    this.updateData.title = this.data.title;
    this.service.updateList(this.updateData);
  }

  goBack() {
    this.route.navigate(['../'],{relativeTo:this.activatedRoute});
  }
}
