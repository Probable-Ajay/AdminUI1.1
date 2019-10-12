export class User {
  id: number;
  name: String;
  companyName: String;
  email: String;
  password: String;
  contactNumber: String;
  location: String;
  token: string;

  constructor() {
    this.password = "";
    this.email = "";
    this.name = "";
    this.companyName = "";
    this.contactNumber = "";
    this.location = "";
  }
}
