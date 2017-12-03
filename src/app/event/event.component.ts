import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'event-component',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers: [EventService],
})
export class EventComponent implements OnInit{
  title = 'app works!';
  events: Event[][];
  week: number = 0;
  constructor(private eventService: EventService) { }

  getEvents(week: number): void {
    this.eventService.getEvents(week)
    .then(events => {
      this.events = new Array<Array<Event>>();
      for (let i = 0; i < 7; i++) {
        this.events[i] = new Array<Event>();
      }
      events.forEach(element => {
        this.events[new Date(element.dateFrom).getDay() - 1].push(element)
      });
    });
  }

  getPrevious(): void{
    this.week--;
    this.getEvents(this.week);
  }

  getNext(): void{
    this.week++;
    this.getEvents(this.week);
  }

  ngOnInit(): void {
    this.getEvents(this.week);
  }
}
