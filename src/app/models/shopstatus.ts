export class ShopStatus {
  reportDetail: ReportDetail[];

  constructor() {
    this.reportDetail = [
      {
        jobId: 123456,
        jobName: "Max Test",
        account: "",
        reportType: "On-Demand",
        app: "Hotel",
        ond: "Delhi",
        date: Date.now().toString(),
        startTime: Date.now().toString(),
        finishTime: Date.now().toString(),
        runDuration: "2",
        requestCount: 2,
        requestFailure: 0,
        sufficiency: "NA",
        statusPercentage: "79"
      },
      {
        jobId: 749303,
        jobName: "Max Test 1",
        account: "",
        reportType: "Schedule",
        app: "Hotel",
        ond: "Kolkata",
        date: Date.now().toString(),
        startTime: Date.now().toString(),
        finishTime: Date.now().toString(),
        runDuration: "2",
        requestCount: 2,
        requestFailure: 0,
        sufficiency: "NA",
        statusPercentage: "50"
      }
    ];
  }
}

export class ReportDetail {
  jobId: number;
  jobName: string;
  account: string;
  reportType: string;
  app: string;
  ond: string;
  date: string;
  startTime: string;
  finishTime: string;
  runDuration: string;
  requestCount: number;
  requestFailure: number;
  sufficiency: string;
  statusPercentage: string;
}
