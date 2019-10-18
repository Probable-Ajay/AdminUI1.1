export class CompanyInformation {
  companyName: string;
  companyAddress: string;
  countries: string;
  companyType: string;
  businessType: string;
  phone: string;
  emailID: string;

  constructor() {
    this.companyName = "";
    this.companyAddress = "";
    this.countries = "";
    this.companyType = "";
    this.businessType = "";
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
    this.firstName = "";
    this.lastName = "";
    this.middleName = "";
    this.givenName = "";
    this.contactNumber = "";
    this.emailID = "";
    this.designationRole = "";
  }
}

export class Functionality {
  funcId: string;
  name: string;
  isToggle: boolean;
  readAccess: boolean;
  writeAccess: boolean;
  fullAccess: boolean;

  constructor() {
    this.funcId = "";
    this.name = "";
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
    this.functionalities = [];
  }
}

// export class RequirementSetup {
//   firstName: string;
//   classOfService: ClassOfService[];
//   shoppingSources: ShoppingSources[];
//   constructor() {
//     this.firstName = "";
//     this.classOfService = [];
//     this.shoppingSources = [];
//   }
// }

export class UserManagement {
  companyInfo: CompanyInformation;
  contactInfo: ContactInformation;
  userAccess: UserAccess;
  // requirementSetup: RequirementSetup;

  constructor() {
    this.companyInfo = new CompanyInformation();
    this.contactInfo = new ContactInformation();
    this.userAccess = new UserAccess();
    //this.requirementSetup = new RequirementSetup();
  }
}
