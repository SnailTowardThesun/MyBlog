import { Component, OnInit, Inject } from '@angular/core';
import { ArticleService } from '../../article.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-contact-dlg',
  template: '{{data}}',
  styleUrls: []
})
export class WarningDlgComponent {

  constructor(
    public dialogRef: MatDialogRef<WarningDlgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  constructor(private articleService: ArticleService, public dialog: MatDialog) { }

  email: string;
  name: string;
  message: string;

  ngOnInit() {
  }

  openDialog(msg: string): void {
    const dialogRef = this.dialog.open(WarningDlgComponent, {
      width: '250px',
      height: '100px',
      data: msg,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onSubmit() {
    const isMsgEmpty = function (msg) {
      if (typeof msg === 'undefined') {
        return true;
      }

      if (msg.length < 1) {
        return true;
      }
    };

    if (isMsgEmpty(this.email)) {
      this.openDialog('email should be set');
      return;
    }

    if (isMsgEmpty(this.name)) {
      this.openDialog('name should be set');
      return;
    }

    if (isMsgEmpty(this.message)) {
      this.openDialog('message should be set');
      return;
    }

    this.articleService.setComment(this.email, this.name, this.message).subscribe(r => {
      console.log(r.code);
    });
  }
}
