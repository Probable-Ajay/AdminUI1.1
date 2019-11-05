export class CompanyInformation {
  companyname: string;
  companyaddress: string;
  countries: string;
  companytype: string;
  businesstype: string;
  companycontact: string;
  emailid: string;

  constructor() {
    this.companyname = "";
    this.companyaddress = "";
    this.countries = "";
    this.companytype = "";
    this.businesstype = "";
    this.companycontact = "";
    this.emailid = "";
  }
}

export class ContactInformation {
  firstname: string;
  lastname: string;
  middlename: string;
  givenname: string;
  contactnumber: string;
  userid: string;
  designationrole: string;

  constructor() {
    this.firstname = "";
    this.lastname = "";
    this.middlename = "";
    this.givenname = "";
    this.contactnumber = "";
    this.userid = "";
    this.designationrole = "";
  }
}

export class Functionality {
  funcid: string;
  name: string;
  isSubscribed: boolean;
  readaccess: boolean;
  writeaccess: boolean;
  reportview: string;
  // fullAccess: boolean;

  constructor() {
    this.funcid = "";
    this.name = "";
    this.isSubscribed = false;
    this.readaccess = false;
    this.writeaccess = false;
    this.reportview = "";
    // this.fullAccess = false;
  }
}

export class UserAccess {
  functionalities: Functionality[];
  constructor() {
    this.functionalities = [];
  }
}

export class OriginDestinations {
  origin: string;
  destination: string;
  constructor() {
    this.origin = "";
    this.destination = "";
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

export class UserModel {
  companyinfo: CompanyInformation;
  contactinfo: ContactInformation;
  useraccess: UserAccess;
  originanddestinations: OriginDestinations[];
  issubuser: number;
  parentuserid: string;
  // requirementSetup: RequirementSetup;

  constructor() {
    this.companyinfo = new CompanyInformation();
    this.contactinfo = new ContactInformation();
    this.useraccess = new UserAccess();
    this.originanddestinations = [];
    this.issubuser = 0;
    this.parentuserid = "";
    //this.requirementSetup = new RequirementSetup();
  }
}

export interface countries {
  countryname: string;
}

export class UsersListing {
  userId: string;
  firstName: string;
  lastName: string;
  subuserId: string;
  isActive: string;
  createdAt: string;
}
