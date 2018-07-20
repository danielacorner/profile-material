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
      siteLink: 'https://dcorn068.github.io/Pave-D3/',
      description: `
        Pave is an interactive data visualization to help high school students develop a mental model of the current career landscape.
        This is a second iteration using SVG data-binding and force simulation from the D3.js library.
        Data was wrangled and cleaned in Microsoft Excel.
        Pave is currently undergoing user testing with high school students.
      `,
      details: [
        `Pave is an interactive data visualization designed to help high school students develop a mental model of the current career landscape.
        This version is a second iteration using SVG data-binding and force simulation from the D3.js library.
        The initial prototype was inspired by and placed third in the Student Pathways Challenge.`,
        `Following initial research and competitor analysis, we determined that there was an unmet need for a way to
        quickly explore many potential career pathways at once, to help students get a handle on that age-old question, "what do you want to do?".`,
        `Using the highly interactive D3.js library to provide an engaging data visualization, this app allows fast, multi-dimensional exploration of Canadian jobs,
        filterable by 4 major and 15 minor job skill categories as classified by the Government of Canada's National Occupation Code system.`,
        `This version of Pave served as my introduction to web development, so the code is inflexible and redundant. 
        Pave is currently being ported to a modular architecture using the Angular framework.
      `],
      tools: [
        {description: "D3.js", link: "https://d3js.org/"},
        {description: "Microsoft Excel", link: "https://www.youtube.com/watch?v=miUTG38k2mA&list=PLrRPvpgDmw0lcTfXZV1AYEkeslJJcWNKw"},
      ],
      sources: [
        {description: "National Occupation Code classification system", link: "http://noc.esdc.gc.ca/English/home.aspx"},
        {description: "Automation risk predictions from the Brookfield Institute", link: "http://brookfieldinstitute.ca/research-analysis/automation/"},
        {description: "Student Pathways Challenge", link: "https://studentpathwayschallenge.ca/"},
      ],
    },
    {
      id: '2',
      title: 'a-h-l.net',
      subtitle: 'responsive portfolio site',
      trustedUrl: null,
      cardImageUrl: './assets/ahl.bmp',
      cardImageAltText: 'Logo for a-h-l.net',
      cardLogoUrl: './assets/ahl.bmp',
      siteLink: 'https://dcorn068.github.io/a-h-l/index.html',
      description: `
        A basic portfolio website with responsive design.
        It uses CSS Grid Layout, Materialize CSS, ScrollReveal, and media queries.
      `,
      details: [
        `A responsive portfolio website developed for my partner Adrianne.`,
        `As a learning experience I manually reproduced the design from a Wordpress template.`,
        `Animations were implemented with basic CSS/JS and the ScrollReveal library; the responsiveness comes from CSS Grid Layout, Materialize CSS, and media queries.`,
        `This project is currently being ported to Angular, a modular architecture for improved manageability.
      `],
      tools: [
        {description: "ScrollReveal", link: "https://scrollrevealjs.org/"},
        {description: "CSS Grid", link: "https://www.w3schools.com/css/css_grid.asp"},
        {description: "Materialize CSS", link: "https://materializecss.com/"},
      ],
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
        'https://public.tableau.com/profile/daniel.corner#!/vizhome/PavePrototype4_1/Welcome',
      description: `
        Pave is an interactive data visualization to help high school students develop a mental model of the current career landscape.
        This is a first iteration using Tableau.
        It placed third in the Student Pathways Challenge design competition.
        `,
      details: [
        `Pave is an interactive data visualization designed to help high school students develop a mental model of the current career landscape.
        Inspired by the Student Pathways Challenge, our team submitted this prototype at the pitch competition and came in third.`,
        `Following initial research and competitor analysis, we determined that there was an unmet need for a way to
        quickly explore many potential career pathways at once, to help students get a handle on that age-old question, "what do you want to do?".`,
        `Using Tableau for visualization and Microsoft Excel for data wrangling and cleaning, we developed a data visualization of Canadian jobs filterable by
        4 major and 15 minor job skill categories, as classified by the Government of Canada's National Occupation Code system. The resulting prototype
        allows users to quickly filter the jobs dataset to suit their skill preferences or ambitions.`,
        `Pave is currently undergoing iteration user testing with high school students.

      `],
      tools: [
        {description: "Tableau", link: "https://www.tableau.com/"},
        {description: "Microsoft Excel", link: "https://www.youtube.com/watch?v=miUTG38k2mA&list=PLrRPvpgDmw0lcTfXZV1AYEkeslJJcWNKw"},
      ],
      sources: [
        {description: "National Occupation Code classification system", link: "http://noc.esdc.gc.ca/English/home.aspx"},
        {description: "Automation risk predictions from the Brookfield Institute", link: "http://brookfieldinstitute.ca/research-analysis/automation/"},
        {description: "Student Pathways Challenge", link: "https://studentpathwayschallenge.ca/"},
      ],
    }
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(project): void {
    const dialogRef = this.dialog.open(ModalDialogComponent, {
      height: '90%',
      width: 'auto',
      data: project
    });
  }
}

  @Component({ selector: 'app-modal-dialog', template: `
    <div class="faded faded-bottom" style="height: 50vh; overflow: hidden;">
      <img src="{{data.cardImageUrl}}" style="object-fit: cover; margin: auto;">
    </div>
    <div>
      <p *ngFor="let d of data.details">{{d}}</p>
    </div>
    <ul>
      <li *ngIf="data.tools"><strong>Tools:</strong></li>
      <li *ngFor="let t of data.tools">
        <a target="_blank" href="{{t.link}}">{{t.description}}</a>
      </li>
      <li *ngIf="data.sources"><strong>Sources:</strong></li>
      <li *ngFor="let s of data.sources">
        <a target="_blank" href="{{s.link}}">{{s.description}}</a>
      </li>
    </ul>
        
    <a target="_blank" href="{{data.siteLink}}" mat-button style="float: right;">
      OPEN <mat-icon class="menu-icon">open_in_new</mat-icon></a>

    `,
    styleUrls: ['./modal.component.scss']
})
  export class ModalDialogComponent {
    constructor(public dialogRef: MatDialogRef<ModalDialogComponent>, @Inject(MAT_DIALOG_DATA) public data) {}

    onNoClick(): void {
      this.dialogRef.close();
    }
  }
