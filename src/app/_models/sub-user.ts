export class Functionality {
  name: string;
  funcid: string;
  readaccess: boolean;
  reportview: string;
  writeaccess: boolean;
  isSubscribed: boolean;
}

export class Useraccess {
  functionalities: Functionality[];
  constructor() {
    this.functionalities = [];
  }
}

export class Companyinfo {
  emailid: string;
  countries: string;
  companyname: string;
  companytype: string;
  businesstype: string;
  companyaddress: string;
  companycontact: string;
}

export class Contactinfo {
  userid: string;
  lastname: string;
  firstname: string;
  givenname: string;
  middlename: string;
  contactnumber: string;
  designationrole: string;
}

export class Originanddestination {
  origin: string;
  destination: string;
}

export class SubUser {
  password: string;
  issubuser: number;
  useraccess: Useraccess;
  companyinfo: Companyinfo;
  contactinfo: Contactinfo;
  parentuserid: string;
  originanddestinations: Originanddestination[];

  constructor() {
    this.password = "";
    this.issubuser = 0;
    this.useraccess = new Useraccess();
    this.companyinfo = new Companyinfo();
    this.contactinfo = new Contactinfo();
    this.parentuserid = "";
    this.originanddestinations = [];
  }
}
