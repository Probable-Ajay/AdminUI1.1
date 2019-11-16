export class userRegistration {
  firstName: String;
  middleName: string;
  lastName: String;
  givenName: string;
  userId: String;
  contactNumber: String;
  userDesignation: string;
  password: String;
  isActive: boolean;
  isSubUser: boolean;

  constructor() {
    this.firstName = "";
    this.middleName = "";
    this.lastName = "";
    this.givenName = "";
    this.userId = "";
    this.contactNumber = "";
    this.userDesignation = "";
    this.password = "";
    this.isActive = false;
    this.isSubUser = false;
  }
}
