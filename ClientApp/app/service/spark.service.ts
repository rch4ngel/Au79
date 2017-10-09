import { Environment } from './../.env';
import { assert } from 'chai';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Room } from '../components/spark/room.model';

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
      'Authorization': Environment.CISCOSPARK_TOKEN
    }

    const headerObj = {
      headers: new Headers(headerDict)
    }

    return this.http.get('https://api.ciscospark.com/v1/rooms', headerObj)    
    .map((response: Response) => {
      const rooms = response.json()
      console.log(rooms);
      console.log(rooms.items[0].id);
      let transformedRooms: Room[] = [];
      
      for(var i = 0; i < rooms.items.length; i++){
        console.log(rooms.items[i])
        transformedRooms.push(new Room(
          rooms.items[i].id,
          rooms.items[i].title,
          rooms.items[i].type,
          rooms.items[i].isLocked,
          rooms.items[i].teamId,
          rooms.items[i].lastActivity,
          rooms.items[i].created)
        )
      }

      this.rooms = transformedRooms;
      console.log(transformedRooms);
      return transformedRooms;
    })
   // .catch((error: Response) => Observable.throw(error.json()));
  }
}