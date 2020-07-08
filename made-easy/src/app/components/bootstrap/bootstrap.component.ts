import { Component, OnInit } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
  type: 'success',
  message: 'This is an success alert',
}, {
  type: 'info',
  message: 'This is an info alert',
}, {
  type: 'warning',
  message: 'This is a warning alert',
}, {
  type: 'danger',
  message: 'This is a danger alert',
}, {
  type: 'primary',
  message: 'This is a primary alert',
}, {
  type: 'secondary',
  message: 'This is a secondary alert',
}, {
  type: 'light',
  message: 'This is a light alert',
}, {
  type: 'dark',
  message: 'This is a dark alert',
}
];

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss']
})
export class BootstrapComponent implements OnInit {

  constructor() {
    this.reset();
  }

  ngOnInit(): void {
    this.rest();
  }

  alerts: Alert[];

  rest() {
    document.getElementById("alert").style.display = "none";
    document.getElementById("buttons").style.display = "none";
    document.getElementById("carousel").style.display = "none";
    document.getElementById("collapse").style.display = "none";
    document.getElementById("datepicker").style.display = "none";
    document.getElementById("dropdown").style.display = "none";
    document.getElementById("modal").style.display = "none";
    document.getElementById("navbar").style.display = "none";
    document.getElementById("pagination").style.display = "none";
    document.getElementById("popover").style.display = "none";
    document.getElementById("progressbar").style.display = "none";
    document.getElementById("rating").style.display = "none";
    document.getElementById("table").style.display = "none";
    document.getElementById("tabset").style.display = "none";
    document.getElementById("timepicker").style.display = "none";
    document.getElementById("toast").style.display = "none";
  }
  display(id) {
    console.log(id);
    this.rest();
    document.getElementById(id).style.display = "block";

  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

}
