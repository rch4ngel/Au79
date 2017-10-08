import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor(http: Http) { }

  ngOnInit() {
    var rooms: any;
  }

  getRooms(){
    
  }
}
