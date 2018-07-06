import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
  
  <div class="content row grey darken-3 white-text left">
  <div class="container">
    <div class="row fadeUp">
      <div class="col s8 m6">
        <h3 class="profile-title center">Hello world!</h3>
        <p>
          I'm a Junior Web Developer looking to get started in the industry. I come from a background in Engineering and Biotechnology.
        </p>
        <p>
        </p>
        <ul>
          <li>I came to the web to <a href>play</a> with <a href>data</a></li>
          <li>Some of my best friends are <a href>spreadsheets</a></li>
          <li><a href>link3</a></li>
        </ul>
      </div>
      <div class="img-container col s4 m5 offset-m1"><img class="responsive-img right circle z-depth-3" 
      src="../../assets/headshot.jpg" alt="headshot"></div>
    </div>
  </div>
  </div>
  `,
  styles: [`
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
  @keyframes fadeUpAnimation{
    0%{
        transform: rotate(0) scale(0.9) translateY(5%);
        opacity: 0.1;
        }
    100%{
        transform: rotate(0) scale(1) translateY(0%);
        opacity: 1;
        }
    }

  .fadeUp{
      animation: fadeUpAnimation .65s 1 0s ease;
  }
  `]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
