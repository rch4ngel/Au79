import { Room } from './../components/rooms/rooms.model';
import { assert } from 'chai';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SparkService {
  private rooms: Room[];
  constructor(private http: Http) { }

  authorize(){
  }

  getRooms(){ 
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer OTNjOTdjM2EtZjIzZC00Zjg2LWExMzUtMjJlNGE1NTQ1OTgxODFmYTRhYTItNmE4'
    }

    const headerObj = {
      headers: new Headers(headerDict)
    }

    return this.http.get('https://api.ciscospark.com/v1/rooms', headerObj)    
    .map((response: Response) => {
      const rooms = response.json();
      console.log(rooms)
      let transformedRooms: Room[] = [];
      for(let room of rooms){
        console.log("Pushing room " + room)
        transformedRooms.push(new Room(
            room.id,
            room.title,
            room.type,
            room.isLocked,
            room.teamId,
            room.lastActivity,
            room.created)
        );
      }
      this.rooms = transformedRooms;
      return transformedRooms;
    })
   // .catch((error: Response) => Observable.throw(error.json()));
  }
}