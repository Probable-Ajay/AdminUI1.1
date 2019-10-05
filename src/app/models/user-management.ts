export class CompanyInformation {
  companyName: string;
  companyAddress: string;
  countries: string[];
  companyType: string[];
  natureOfBusiness: string[];
  phone: string;
  emailID: string;

  constructor() {
    this.companyName = "Price Talk App";
    this.companyAddress = "Noida,Uttar Pradesh";
    this.countries = [
      "India",
      "Indonesia",
      "Iran",
      "Iraq",
      "Israel",
      "Japan",
      "Jordan"
    ];
    this.companyType = ["Company Type", "Travel", "Airline", "Telecom"];
    this.natureOfBusiness = ["Nature of Business", "Small", "Medium", "Large"];
    this.phone = "";
    this.emailID = "";
  }
}

export class ContactInformation {
  firstName: string;
  lastName: string;
  middleName: string;
  givenName: string;
  contactNumber: string;
  emailID: string;
  designationRole: string;

  constructor() {
    this.firstName = "Ajay Verma";
    this.lastName = "";
    this.middleName = "";
    this.givenName = "";
    this.contactNumber = "";
    this.emailID = "";
    this.designationRole = "SSE";
  }
}

export class Functionality {
  functionalityName: string;
  isToggle: boolean;
  readAccess: boolean;
  writeAccess: boolean;
  fullAccess: boolean;

  constructor() {
    this.functionalityName = "";
    this.isToggle = false;
    this.readAccess = false;
    this.writeAccess = false;
    this.fullAccess = false;
  }
}

export class UserAccess {
  cloneMainUser: boolean;
  functionalities: Functionality[];
  constructor() {
    this.functionalities = [
      {
        functionalityName: "Functionality 1",
        isToggle: true,
        readAccess: true,
        writeAccess: false,
        fullAccess: false
      },
      {
        functionalityName: "Functionality 2",
        isToggle: false,
        readAccess: false,
        writeAccess: true,
        fullAccess: false
      },
      {
        functionalityName: "Functionality 2",
        isToggle: false,
        readAccess: false,
        writeAccess: false,
        fullAccess: true
      },
      {
        functionalityName: "Functionality 3",
        isToggle: true,
        readAccess: true,
        writeAccess: false,
        fullAccess: false
      }
    ];
  }
}

export class RequirementSetup {
  firstName: string;
  classOfService: string[];
  shoppingSources: string[];
  constructor() {
    this.firstName = "";
    this.classOfService = ["Economy", "Business", "First Class"];
    this.shoppingSources = ["IN", "US", "UAE", "UK"];
  }
}

export class UserManagement {
  companyInformation: CompanyInformation;
  contactInformation: ContactInformation;
  userAccess: UserAccess;
  requirementSetup: RequirementSetup;

  constructor() {
    this.companyInformation = new CompanyInformation();
    this.contactInformation = new ContactInformation();
    this.userAccess = new UserAccess();
    this.requirementSetup = new RequirementSetup();
  }
}
