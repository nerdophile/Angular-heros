import { Injectable } from '@angular/core';

@Injectable({
  // tslint:disable-next-line: indent
  providedIn: 'root'
})
export class MessagesService {

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);

  }
  clear() {
    this.messages = [];
  }

  constructor() { }
}
