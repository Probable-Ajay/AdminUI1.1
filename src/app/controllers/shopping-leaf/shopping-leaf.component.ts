import { Component, OnInit } from "@angular/core";
import { ShopPrice, ShoppingDates } from "src/app/models/shop/shop-price";
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
  dates: ShoppingDates = new ShoppingDates();

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
  dropdownListOnDays = [];
  selectedItemsOnDays = [];
  dropdownSettings = {};
  ddListClassOfServices = [];
  selectedItemsClassOfService = [];
  ddListNoOfStops = [];
  selectedItemsNoOfStops = [];

  ddListAirlines = [];
  selectedItemsAirlines = [];

  ddlDepartureTimeFromOrigin = [];
  selectedDepartureTimeFromOrigin = [];

  ddlDepartureTimeToOrigin = [];
  selectedDepartureTimeToOrigin = [];

  ddlWeeksOfDelivery = [];
  selectedWeeksOfDelivery = [];

  ngOnInit() {
    this.ddListNoOfStops = [
      { id: 1, itemName: "0" },
      { id: 2, itemName: "1" },
      { id: 3, itemName: "2" }
    ];
    this.selectedItemsNoOfStops = [{ id: 2, itemName: "1" }];
    this.ddListClassOfServices = [
      { id: 1, itemName: "Economy" },
      { id: 2, itemName: "Premium Economy" },
      { id: 3, itemName: "Business" },
      { id: 4, itemName: "First" },
      { id: 5, itemName: "All" }
    ];
    this.selectedItemsClassOfService = [
      { id: 1, itemName: "Economy" },
      { id: 3, itemName: "Business" }
    ];
    this.dropdownListOnDays = [
      { id: 1, itemName: "Sunday" },
      { id: 2, itemName: "Monday" },
      { id: 3, itemName: "Tuesday" },
      { id: 4, itemName: "Wednesday" },
      { id: 5, itemName: "Thursday" },
      { id: 6, itemName: "Friday" },
      { id: 7, itemName: "Saturday" }
    ];
    this.selectedItemsOnDays = [
      { id: 2, itemName: "Monday" },
      { id: 4, itemName: "Wednesday" }
    ];

    this.ddListAirlines = [
      { id: 1, itemName: "AirIndia" },
      { id: 2, itemName: "SpiceJet" },
      { id: 3, itemName: "Indigo" },
      { id: 4, itemName: "Go-Air" }
    ];
    this.selectedItemsAirlines = [{ id: 2, itemName: "SpiceJet" }];

    this.ddlDepartureTimeFromOrigin = [
      { id: 1, itemName: "Before 6AM" },
      { id: 2, itemName: "6AM to 12Noon" },
      { id: 3, itemName: "12Noon to 6PM" },
      { id: 4, itemName: "After 6PM" }
    ];
    this.selectedDepartureTimeFromOrigin = [
      { id: 2, itemName: "6AM to 12Noon" }
    ];

    this.ddlDepartureTimeToOrigin = [
      { id: 1, itemName: "Before 6AM" },
      { id: 2, itemName: "6AM to 12Noon" },
      { id: 3, itemName: "12Noon to 6PM" },
      { id: 4, itemName: "After 6PM" }
    ];
    this.selectedDepartureTimeToOrigin = [{ id: 2, itemName: "6AM to 12Noon" }];

    this.ddlWeeksOfDelivery = [
      { id: 1, itemName: "First" },
      { id: 2, itemName: "Second" },
      { id: 3, itemName: "Third" },
      { id: 4, itemName: "Fourth" },
      { id: 5, itemName: "Fifth" }
    ];
    this.selectedWeeksOfDelivery = [{ id: 2, itemName: "Second" }];

    this.dropdownSettings = {
      singleSelection: false,
      // text: "On Days",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }
  // onItemSelect(item: any) {
  //   console.log(item);
  //   console.log(this.selectedItemsOnDays);
  // }
  // OnItemDeSelect(item: any) {
  //   console.log(item);
  //   console.log(this.selectedItemsOnDays);
  // }
  // onSelectAll(items: any) {
  //   console.log(items);
  // }
  // onDeSelectAll(items: any) {
  //   console.log(items);
  // }

  onChange() {
    this.scheduledReportButton = !this.scheduledReportButton;
  }
}
