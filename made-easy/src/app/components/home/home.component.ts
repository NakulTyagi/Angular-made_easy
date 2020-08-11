import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  libs = [{
    name: "Bootstrap",
    link: "/bootstrap"
  },
  {
    name: "Maps",
    link: "/maps"
  }
    ,
  {
    name: "Translate",
    link: "/translate"
  }, {
    name: "PDF viewer",
    link: "/pdf"
  }, {
    name: "Deploy",
    link: "/deploy"
  }, {
    name: "Bootstrap",
    link: "/bootstrap"
  }, {
    name: "Bootstrap",
    link: "/bootstrap"
  }, {
    name: "Bootstrap",
    link: "/bootstrap"
  }]



}
