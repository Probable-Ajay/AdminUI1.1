export class CompanyInformation {
  companyName: string;
  companyAddress: string;
  countries: string;
  companyType: string;
  businessType: string;
  companyContact: string;
  emailID: string;

  constructor() {
    this.companyName = "";
    this.companyAddress = "";
    this.countries = "";
    this.companyType = "";
    this.businessType = "";
    this.companyContact = "";
    this.emailID = "";
  }
}

export class UserInformation {
  firstName: string;
  lastName: string;
  middleName: string;
  contactNumber: string;
  loginName: string;
  designationRole: string;
  parentEmailID: string;

  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.middleName = "";
    this.contactNumber = "";
    this.loginName = "";
    this.designationRole = "";
    this.parentEmailID = "";
  }
}

export class AccessDetails {
  funcId: string;
  name: string;
  isSubscribed: boolean;
  readAccess: boolean;
  writeAccess: boolean;
  reportView: string;
  // fullAccess: boolean;

  constructor() {
    this.funcId = "";
    this.name = "";
    this.isSubscribed = false;
    this.readAccess = false;
    this.writeAccess = false;
    this.reportView = "";
    // this.fullAccess = false;
  }
}

export class UserAccess {
  // cloneMainUser: boolean;
  isSubUser: boolean;
  accessInfo: AccessDetails[];
  constructor() {
    this.isSubUser = false;
    this.accessInfo = [];
  }
}

export class OriginDestinations {
  Origin: string;
  Destination: string;
  constructor() {
    this.Origin = "";
    this.Destination = "";
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

export class User {
  companyInfo: CompanyInformation;
  userInfo: UserInformation;
  userAccess: UserAccess;
  originAndDestinations: OriginDestinations[];
  // requirementSetup: RequirementSetup;

  constructor() {
    this.companyInfo = new CompanyInformation();
    this.userInfo = new UserInformation();
    this.userAccess = new UserAccess();
    this.originAndDestinations = [];
    //this.requirementSetup = new RequirementSetup();
  }
}
