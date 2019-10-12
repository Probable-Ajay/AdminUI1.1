export class userRegistration {
  firstName: String;
  lastName: String;
  userId: String;
  contactNumber: String;
  companyName: string;
  isActive: boolean;
  isSubUser: boolean;
  password: String;

  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.userId = "";
    this.contactNumber = "";
    this.companyName = "";
    this.isActive = false;
    this.isSubUser = false;
    this.password = "";
  }
}
