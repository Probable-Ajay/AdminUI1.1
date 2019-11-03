export class UserInformation {
  firstName: string;
  lastName: string;
  middleName: string;
  loginEmail: string;
  userRole: string;
  parentEmailID: string;
  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.middleName = "";
    this.loginEmail = "";
    this.userRole = "";
  }
}
export class AccessDetails {
  funcId: string;
  name: string;
  readAccess: boolean;
  writeAccess: boolean;
  reportView: string;

  constructor() {
    this.funcId = "";
    this.name = "";
    this.readAccess = false;
    this.writeAccess = false;
    this.reportView = "";
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
export class User {
  userInfo: UserInformation;
  accessInfo: AccessDetails[];
  originAndDestinations: OriginDestinations[];

  constructor() {
    this.userInfo = new UserInformation();
    this.accessInfo = [];
    this.originAndDestinations = [];
  }
}
