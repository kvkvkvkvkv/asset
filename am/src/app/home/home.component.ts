import { Component, OnInit } from '@angular/core';
import { AssetService, Asset } from '../asset.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data : Asset[];
  constructor(private service: AssetService) { }

  ngOnInit() {
    this.data = this.service.getAssets();
  }

}
