import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import User from 'src/app/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() logoutEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() loggedIn: boolean;
  @Input() loggedInUser: User;

  constructor() { }

  ngOnInit() {
  }

  logout() {
    this.logoutEvent.emit();
  }

}
