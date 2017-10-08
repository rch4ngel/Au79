import { Room } from './../rooms/rooms.model';
import { SparkService } from './../../service/spark.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spark',
  templateUrl: './spark.component.html',
  styleUrls: ['./spark.component.css']
})
export class SparkComponent implements OnInit {
  rooms: Room[];

  constructor(private sparkService: SparkService) {   }

  ngOnInit() {

    this.sparkService.getRooms()
    .subscribe(
      (rooms: Room[]) => {
        this.rooms = rooms;
        console.log(rooms);
      }
    )
  }
}
