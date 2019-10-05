export class ShopPrice {
  reportInfo: ReportInformation;
  journeyInfo: JourneyInformation;
  shoppingdates: ShoppingDates;
  shoppingChannels: string[];

  constructor() {
    this.reportInfo = new ReportInformation();
    this.journeyInfo = new JourneyInformation();
    this.shoppingdates = new ShoppingDates();
    this.shoppingChannels = [
      "Booking.com",
      "Agoda",
      "MakeMyTrip",
      "Ctrip",
      "TripAdvisor",
      "Traveloka"
    ];
  }
}
export class ReportInformation {
  reportName: string;
  frequency: string[];
  daysOfDelivery: string[];
  weeksOfDelivery: string[];
  weekNumber: string[];
  repeateGenerationTime: string[];
  constructor() {
    this.reportName = "Marina Bay Sands";
    this.frequency = ["Daily", "Weekly", "Monthly"];
    this.daysOfDelivery = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    this.weeksOfDelivery = ["First", "Second", "Third", "Fourth", "Fifth"];
    this.weekNumber = [
      "WeekNumber 1",
      "WeekNumber 2",
      "weekNumber 3",
      "weekNumber 4",
      "weekNumber 5"
    ];
    this.repeateGenerationTime = [
      "0:30",
      "1:00",
      "1:30",
      "2:00",
      "2:30",
      "3:00",
      "3:30",
      "4:00",
      "4:30",
      "5:00",
      "5:30",
      "6:00",
      "6:30"
    ];
  }
}
export class JourneyInformation {
  journeyType: string[];
  currencyType: string[];
  adultPaxCount: string[];
  childPaxCount: string[];
  infantPaxCount: string[];
  flightInfo: FlightInformation;
  constructor() {
    this.journeyType = ["One Way", "Round Trip", "Both"];
    this.currencyType = ["INR", "USD", "EUR"];
    this.flightInfo = new FlightInformation();
    this.adultPaxCount = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    this.childPaxCount = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    this.infantPaxCount = ["1", "2"];
  }
}
export class FlightInformation {
  classOfServices: string[];
  stops: string[];
  originAndDestinations: string;
  airlines: Airline[];
  constructor() {
    this.classOfServices = [
      "Econony",
      "Premium Economy",
      "Business",
      "First",
      "All"
    ];
    this.stops = ["0", "1", "2"];
    this.originAndDestinations = "DEL-BLR";
    this.airlines = [
      { airlineName: "AirIndia", airlineCode: "AI" },
      { airlineName: "Indigo", airlineCode: "IG" },
      { airlineName: "SpiceJet", airlineCode: "SG" },
      { airlineName: "All", airlineCode: "ALL" }
    ];
  }
}
export class Airline {
  airlineName: string;
  airlineCode: string;
}
export class ShoppingDates {}
