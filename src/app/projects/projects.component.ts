import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-projects",
  template: `
  <div class="container">
  <mat-grid-list cols="2" rowHeight="500px" gutterSize="24px">

      <mat-grid-tile *ngFor="let project of projects">
        <!-- {{project.title | uppercase}} -->
        <mat-card (click)="showModal(project.id)" class="project-card z-depth-3">
          <mat-card-header>
            <div mat-card-avatar [ngStyle]="{'background-image':'url(' + project.cardImageUrl + ')'}" class="project-header-image"></div>
            <mat-card-title>{{project.title}}</mat-card-title>
            <mat-card-subtitle>{{project.subtitle}}</mat-card-subtitle>
          </mat-card-header>
          <img class="card-image" mat-card-image src="{{project.cardLogoUrl}}" alt="{{project.cardLogoAltText}}">
          <mat-card-content>
            <p>
              {{project.description}}
            </p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button>DETAILS</button>
            <a href="{{project.siteLink}}" target="_blank" mat-button>
              OPEN <mat-icon class="menu-icon">open_in_new</mat-icon>
            </a>
          </mat-card-actions>
        </mat-card>
      </mat-grid-tile>

  </mat-grid-list>
  </div>

  <app-modal *ngIf="modalOn"></app-modal>
  `,
  styles: [
    ` .container{
        width: 95%;
        margin-top: 25px;
      }
      .card-image {
        height: 320px;
      }
      .project-card {
        max-width: 500px;
      }
      .project-header-image {
        background-size: cover;
      }
    `
  ]
})
export class ProjectsComponent implements OnInit {
  public site = { url: "https://dcorn068.github.io/profile-material/" };
  public modalOn = false;
  public projects = [
    {
      id: "1",
      title: "Pave: The Canadian Job Explorer (D3.js)",
      subtitle: "interactive data visualization",
      cardLogoUrl: "./assets/pave_d3.bmp",
      trustedUrl: null,
      cardLogoAltText: "Logo for Pave (D3.js)",
      cardImageUrl: "./assets/pave_d3_logo.png",
      description: "Pave is an interactive data visualization... ",
      siteLink: "dcorn068.github.io/Pave-D3/"
    },
    {
      id: "2",
      title: "a-h-l.net",
      subtitle: "responsive portfolio site",
      cardLogoUrl: "./assets/ahl.bmp",
      trustedUrl: null,
      cardLogoAltText: "Logo for a-h-l.net",
      cardImageUrl: "./assets/ahl.bmp",
      description: "A basic portfolio website... ",
      siteLink: "dcorn068.github.io/a-h-l/index.html"
    },
    {
      id: "3",
      title: "Pave: The Canadian Job Explorer (Tableau)",
      subtitle: "interactive data visualization",
      cardLogoUrl: "./assets/pave_tableau.bmp",
      trustedUrl: null,
      cardLogoAltText: "Logo for Pave (Tableau)",
      cardImageUrl: "./assets/pave_tableau_logo.bmp",
      description: "Pave is an interactive data visualization... ",
      siteLink:
        "public.tableau.com/profile/daniel.corner#!/vizhome/PavePrototype4_1/Welcome"
    }
  ];

  constructor() {}

  ngOnInit() {
    // this.projectlist
  }

  showModal(projectid) {
    this.modalOn = true;
  }
  hideModal(projectid) {
    this.modalOn = false;
  }
}
