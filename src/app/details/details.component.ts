import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  template: `
    <p>
      {{childProjects.title}}
      {{childProjects.subtitle}}
      {{childProjects.description}}
    </p>
  `,
  styles: []
})
export class DetailsComponent implements OnInit {

  @Input() childProjects: array;

  constructor() { }

  ngOnInit() {
  }

}
