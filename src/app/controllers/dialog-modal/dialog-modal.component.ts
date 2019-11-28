import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css']
})
export class DialogModalComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogModalComponent>,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  save() {
    this.router.navigate(["/dashboard/manageusers"]);
    this.dialogRef.close();
}

close() {
    this.dialogRef.close();
}
}
