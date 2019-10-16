export class CompanyInformation {
  companyName: string;
  companyAddress: string;
  countries: string;
  companyType: string;
  natureOfBusiness: string;
  phone: string;
  emailID: string;

  constructor() {
    this.companyName = "";
    this.companyAddress = "";
    this.countries = "";
    this.companyType = "";
    this.natureOfBusiness = "";
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
  funcId: number;
  functionalityName: string;
  isToggle: boolean;
  readAccess: boolean;
  writeAccess: boolean;
  fullAccess: boolean;

  constructor() {
    this.funcId = 0;
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
    this.functionalities = [];
  }
}

export class RequirementSetup {
  firstName: string;
  classOfService: ClassOfService[];
  shoppingSources: ShoppingSources[];
  constructor() {
    this.firstName = "";
    this.classOfService = [];
    this.shoppingSources = [];
  }
}

export class ClassOfService {
  csId: number;
  csName: string;
}
export class ShoppingSources {
  ssId: number;
  ssName: string;
}

export class Country {
  countryCode: string;
  countryName: string;
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
