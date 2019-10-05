export class userParam {
  companyName: String;
  name: String;
  email: String;
  password: String;
  contactNumber: String;
  location: String[];

  constructor() {
    this.password = "";
    this.email = "";
    this.name = "";
    this.companyName = "";
    this.contactNumber = "";
    this.location = this.location = [
      "Delhi",
      "Bangalore",
      "Hyderabad",
      "Ahmedabad",
      "Chennai",
      "Kolkata",
      "Surat",
      "Pune",
      "Jaipur",
      "Lucknow",
      "Kanpur",
      "Nagpur"
    ];
  }
}
