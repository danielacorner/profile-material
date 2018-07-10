import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-profile",
  template: `

  <div class="content row white-text left">
    <div class="container">
      <div class="row fadeUp">

        <!-- text -->
        <div class="col s8 m6">
          <h3 class="profile-title center">Hello world!</h3>
          <p>I'm a Junior Front-end Engineer looking to get started in the industry.</p>
          <p>My background is in engineering (chemical and biotech) -- I like to make things work.
          I discovered my passion for web development during a data-driven design competition, and I've been self-teaching ever since.</p>
          <p>Some of my interests:</p>
          <ul>
            <li>Data visualization (<span class="parenthetical">D3.js, Tableau</span>) and wrangling (<span class="parenthetical">Excel, JavaScript</span>) </li>
            <li>Front-end frameworks (<span class="parenthetical">Angular, Vue</span>) and CSS frameworks (<span class="parenthetical">Materialize, Bootstrap, CSS Grid</span>)</li>
            <li>Accelerated learning techniques (<span class="parenthetical">MMS, mnemonics, memory palaces, ...</span>)</li>
          </ul>
          <br/>
          <p class="center">
            <a href="mailto:dcorn068@gmail.com">Contact me</a>
             •
            <a href="!#">Résumé (coming soon)</a>
          </p>
        </div>

        <!-- photo -->
        <div class="img-container col s4 m5 offset-m1"><img class="responsive-img right circle z-depth-3"
        src="./assets/headshot.jpg" alt="headshot">
        </div>
      </div>

    </div>
  </div>
  `,
  styles: [
    `
      .parenthetical {
        color: lightblue;
      }
      ul li {
        list-style-type: circle;
        margin-left: 20px;
      }
      .profile-title {
        margin-top: 20%;
      }
      .circle {
        width: 300px;
      }
      .content {
        position: fixed;
        top: 64px;
        bottom: -20px;
        width: 100%;
      }
      .img-container {
        margin: 10vh 0 0 0;
      }

      @keyframes fadeUpAnimation {
        0% {
          transform: rotate(0) scale(0.9) translateY(5%);
          opacity: 0.1;
        }
        100% {
          transform: rotate(0) scale(1) translateY(0%);
          opacity: 1;
        }
      }

      .fadeUp {
        animation: fadeUpAnimation 0.65s 1 0s ease;
      }
    `
  ]
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
