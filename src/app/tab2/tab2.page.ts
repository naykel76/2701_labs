import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  counter: number = 0;
  username: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  increment() {
    this.counter++;
  }

  login() {
    this.increment()
    this.router.navigateByUrl('/account/' + this.username);
  }

}
