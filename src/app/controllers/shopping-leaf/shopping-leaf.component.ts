import { Component, OnInit } from "@angular/core";
import { ShopPrice } from "src/app/models/shop/shop-price";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-shopping-leaf",
  templateUrl: "./shopping-leaf.component.html",
  styleUrls: ["./shopping-leaf.component.css"]
})
export class ShoppingLeafComponent implements OnInit {
  scheduledReportButton: boolean;
  selectedChannel: string;
  shop: ShopPrice = new ShopPrice();

  toppings = new FormControl();
  toppingList: string[] = [
    "Extra cheese",
    "Mushroom",
    "Onion",
    "Pepperoni",
    "Sausage",
    "Tomato"
  ];

  constructor() {}

  ngOnInit() {}

  onChange() {
    this.scheduledReportButton = !this.scheduledReportButton;
  }
}
