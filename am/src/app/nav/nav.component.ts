import { Component, OnInit } from '@angular/core';
import { AssetService } from '../asset.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  assestData = [];

  constructor(private assetService : AssetService, private route: Router) { }

  ngOnInit() {
    this.assestData = this.assetService.getAssets();
  }

  onSelect(asset) {
    this.route.navigate(['/asset',asset.id]);
  }
}
