import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as $ from 'jquery';
import * as M from 'materialize-css';

@Component({
  selector: 'app-projects',
  template: `
  <!-- HORIZONTAL CARDS (mobile & tablet) -->

  <div class="row hide-on-large-only">

    <div *ngFor="let project of projects" class="col s12">
      <div class="card horizontal sticky-action">

        <div class="card-image waves-effect waves-block waves-light">
          <img class="card-image activator" src="{{project.cardImageUrl}}" alt="{{project.cardImageAltText}}">
        </div>

        <div style="width: 60%">
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
              {{project.title}}<i class="material-icons right">more_vert</i></span>
              <p class="subtitle">{{project.subtitle}}</p>
              <br/>
              <p>{{(project.description.length>200)? (project.description | slice:0:200)+'...' : (project.description) }}</p>
            </div>

            <div class="card-action" style="position: absolute; bottom: 0;">
              <a (click)="openDialog(project)" mat-button>
                DETAILS</a>
              <a target="_blank" href="{{project.siteLink}}" mat-button style="margin-right: 0">
                OPEN <mat-icon class="menu-icon">open_in_new</mat-icon></a>
            </div>
        </div>

        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
          {{project.title}}<i class="material-icons right">close</i></span>
          <p>{{project.description}}</p>
        </div>

      </div>
    </div>

  </div>

  <!-- GRID LIST (tablet & desktop) -->
  <div class="container">

  <mat-grid-list cols="2" rowHeight="500px" gutterSize="24px" class="hide-on-med-and-down">

      <mat-grid-tile *ngFor="let project of projects">
        <div class="card sticky-action project-card z-depth-3">

          <div class="card-image waves-effect waves-block waves-light">
            <img class="card-image activator" src="{{project.cardImageUrl}}" alt="{{project.cardImageAltText}}">
          </div>

          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
            {{project.title}}<i class="material-icons right">more_vert</i></span>
            <p class="subtitle">{{project.subtitle}}</p>
          </div>

          <div class="card-action">
            <a (click)="openDialog(project)" mat-button>
              DETAILS</a>
            <a href="{{project.siteLink}}" target="_blank" mat-button style="margin-right: 0">
              OPEN <mat-icon class="menu-icon">open_in_new</mat-icon></a>
          </div>

          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
            {{project.title}}<i class="material-icons right">close</i></span>
            <p>{{project.description}}</p>
          </div>

        </div>
      </mat-grid-tile>

  </mat-grid-list>
  </div>

  <!-- MODALS -->
  <div *ngFor="let project of projects" id="modal{{project.id}}" class="modal">
    <div class="modal-content">
      <h4>{{project.title}}<i class="material-icons right modal-close">close</i></h4>
      <img class="details-image center-align" src="{{project.cardImageUrl}}" alt="{{project.cardImageAltText}}">
      <span [innerHTML]="project.details"></span>
    </div>
    <div class="modal-footer">
      <a target="_blank" href="{{project.siteLink}}" class="orange-text modal-close mat-button" mat-button style="margin-right: 0">
      OPEN <mat-icon class="menu-icon">open_in_new</mat-icon></a>
    </div>
  </div>


  `,
  styles: [
    `
      .subtitle {
      }
      .container {
        width: 95%;
        margin-top: 25px;
      }
      .card-image {
        height: 320px;
        object-fit: cover;
      }
      .details-image {
        width: 100%;
      }
      .project-card {
        max-width: 500px;
      }
      .project-header-image {
        background-size: cover;
      }
      .material-icons {
        line-height: 0.9;
      }
    `
  ]
})
export class ProjectsComponent implements OnInit {
  public site = { url: 'https://dcorn068.github.io/profile-material/' };
  public projects = [
    {
      id: '1',
      title: 'Pave (D3.js)',
      subtitle: 'interactive data visualization',
      trustedUrl: null,
      cardImageUrl: './assets/pave_d3.bmp',
      cardImageAltText: 'Logo for Pave (D3.js)',
      cardLogoUrl: './assets/pave_d3_logo.png',
      siteLink: 'dcorn068.github.io/Pave-D3/',
      description: `
        Pave is an interactive data visualization to help high school students develop a mental model of the current career landscape.
        This is a second iteration using SVG data-binding and force simulation from the D3.js library.
        Data was wrangled and cleaned in Microsoft Excel.
        Pave is currently undergoing user testing with high school students.
      `,
      details: `
        <p>Pave is an interactive data visualization to help high school students develop
        a mental model of the current career landscape.</p>
        <p>This is a second iteration using SVG data-binding and force simulation from the
        <a target="_blank" href="https://d3js.org/">D3.js</a> library.</p>
        <p>Data was wrangled and cleaned in Microsoft Excel.</p>
        <p>Pave is currently undergoing user testing with high school students.</p>
        <ul>
        <li><strong>Sources:</strong></li>
        <li><a target="_blank" href="https://d3js.org/">D3.js</a></li>
        <li><a target="_blank" href="http://noc.esdc.gc.ca/English/home.aspx">National Occupation Code classification system</a></li>
        <li><a target="_blank" href="http://brookfieldinstitute.ca/research-analysis/automation/">
        Automation risk predictions from the Brookfield Institute</a></li>
        <li>Microsoft Excel</li>
        </ul>
      `
    },
    {
      id: '2',
      title: 'a-h-l.net',
      subtitle: 'responsive portfolio site',
      trustedUrl: null,
      cardImageUrl: './assets/ahl.bmp',
      cardImageAltText: 'Logo for a-h-l.net',
      cardLogoUrl: './assets/ahl.bmp',
      siteLink: 'dcorn068.github.io/a-h-l/index.html',
      description: `
        A basic portfolio website with responsive design.
        It uses CSS Grid Layout, media queries, Materialize CSS, and ScrollReveal.
      `,
      details: `
        <p>A basic portfolio website with responsive design.</p>
        <ul>
        <li><strong>Sources:</strong></li>
        <li><a target="_blank" href="https://www.w3schools.com/css/css_grid.asp">CSS Grid Layout</a></li>
        <li><a target="_blank" href="https://www.w3schools.com/css/css_rwd_mediaqueries.asp">Media queries</a></li>
        <li><a href="https://materializecss.com/" target="_blank">Materialize CSS</a></li>
        <li><a href="https://scrollrevealjs.org/" target="_blank">ScrollReveal</a></li>
        </ul>
      `
    },
    {
      id: '3',
      title: 'Pave (Tableau)',
      subtitle: 'interactive data visualization',
      trustedUrl: null,
      cardImageUrl: './assets/pave_tableau.bmp',
      cardImageAltText: 'Logo for Pave (Tableau)',
      cardLogoUrl: './assets/pave_tableau_logo.bmp',
      siteLink:
        'public.tableau.com/profile/daniel.corner#!/vizhome/PavePrototype4_1/Welcome',
      description: `
        Pave is an interactive data visualization to help high school students develop a mental model of the current career landscape.
        This is a first iteration using Tableau.
        It placed third in the Student Pathways Challenge design competition.
        `,
      details: `
        <p>Pave is an interactive data visualization to help high school students develop
        a mental model of the current career landscape.</p>
        <p>This is a first iteration using <a href="https://www.tableau.com/">Tableau</a>
        for visualization and Microsoft Excel for data wrangling and cleaning.</p>
        <p>It placed third in the <a href="https://studentpathwayschallenge.ca/">Student Pathways Challenge</a> design competition.</p>
        <ul>
        <li><strong>Sources:</strong></li>
        <li><a href="https://www.tableau.com/">Tableau</a></li>
        <li><a target="_blank" href="http://noc.esdc.gc.ca/English/home.aspx">National Occupation Code classification system</a></li>
        <li><a target="_blank" href="http://brookfieldinstitute.ca/research-analysis/automation/">
        Automation risk predictions from the Brookfield Institute</a></li>
        <li>Microsoft Excel</li>
        </ul>
      `
    }
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(project): void {
    const dialogRef = this.dialog.open(ModalDialogComponent, {
      height: '90%',
      width: '90%',
      data: project,
    });
  }
}

  @Component({
    selector: 'app-modal-dialog',
    template: `
      <p>dialog for project {{data.id}}</p>
    `,
  })
  export class ModalDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
