import { Component, OnInit } from "@angular/core";
import { ShopStatus } from "../../_models";

@Component({
  selector: "app-shopping-stats",
  templateUrl: "./shopping-stats.component.html",
  styleUrls: ["./shopping-stats.component.css"]
})
export class ShoppingStatsComponent implements OnInit {
  shopStatus: ShopStatus = new ShopStatus();
  constructor() {}

  ngOnInit() {}
}
