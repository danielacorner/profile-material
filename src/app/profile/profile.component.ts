import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
  <div class="content grey darken-3 white-text left">
  <h1 class="profile-title center">HELLO!</h1>
  <p class="profile-text">
    hello hello hello hello hello hello hello hello hello hello hello 
    hello hello hello hello hello hello hello hello hello hello hello 
    hello hello hello hello hello hello hello hello hello hello hello 
    hello hello hello hello hello hello hello hello hello hello hello 
    hello hello hello hello hello hello hello hello hello hello hello 
    hello hello hello hello hello hello hello hello hello hello hello 
  </p>
    <div class="img-container"><img class="responsive-img right circle z-depth-3" src="../../assets/headshot.jpg" alt="headshot"></div>
  </div>
  `,
  styles: [`
  .circle {
    margin: 20vh 5% 0 0;
    width: 300px;
  }
  .content {
    padding: 10%;
    height: 100vh;
  }
  .profile-text {
    float: left;
    width: 50%;
    margin: 20vh 0 0 0;
  }
  .img-container {
    display: inline-flex;
    vertical-align: middle;
    height: 500px;
  }
  `]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
