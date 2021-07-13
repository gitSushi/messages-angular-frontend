import { Injectable } from '@angular/core';

import { Message } from './../models/message';

import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // private msg: Message[] = [
  //   {
  //     id: 0,
  //     from: 'bob',
  //     to: 'not bobo',
  //     subject: 'prank',
  //     body: 'I have nothing to say to NOT you',
  //     read: false,
  //     sendAt: new Date('December 17, 1995')
  //   },
  //   {
  //     id: 1,
  //     from: 'gertrude',
  //     to: 'cunégonde',
  //     subject: 'NOT a prank',
  //     body: 'What a moronic name your parents gave you !',
  //     read: true,
  //     sendAt: new Date('May 7, 2005')
  //   },
  //   {
  //     id: 2,
  //     from: 'bobby',
  //     to: 'digital',
  //     subject: 'new song',
  //     body: 'content : lalala',
  //     read: false,
  //     sendAt: new Date('April 23, 2003')
  //   },
  //   {
  //     id: 3,
  //     from: 'arthur',
  //     to: 'lancelot',
  //     subject: 'GONNA HAVE UR HEAD ON A PIKE',
  //     body: 'Youn son of a B*# ! You F&#* slept with my wife !!!',
  //     read: false,
  //     sendAt: new Date('November 06, 2007')
  //   },
  //   {
  //     id: 4,
  //     from: 'top',
  //     to: 'bottom',
  //     subject: 'spank',
  //     body: 'I found a nice whip',
  //     read: false,
  //     sendAt: new Date('June 11, 2015')
  //   },
  //   {
  //     id: 5,
  //     from: 'roberta',
  //     to: 'charles',
  //     subject: 'HEYO',
  //     body: 'How are you ?',
  //     read: false,
  //     sendAt: new Date('October 31, 2021')
  //   }
  // ];

  private msg!: Message[];

  subject: BehaviorSubject<Message[]>

  router!: Router;
  http!: HttpClient;

  constructor(router: Router, http: HttpClient) {
    this.router = router;
    this.http = http;
    this.subject = new BehaviorSubject([] as Message[])
    // this.getMsg().then(m => this.msg = m);
  }

  // getAll(): Promise<Message[]> {
  //   return this.http.get<Message[]>('http://localhost:3000/messages').toPromise()
  // }

  // getAllMessages() {
  //   return this.http.get<Message[]>('http://localhost:3000/messages').toPromise()
  // }

  createMessage(message: Message) {
    const httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Content-Type', 'application/json');
    const options = { headers: httpHeaders };

    return this.http
      .post('http://localhost:3000/messages', message, options)
      .toPromise()
      .then(m => {
        console.log(m)
        this.reload()
        this.router.navigate(['messages'])
      })
      .catch(err => {
        console.log(err)
        this.router.navigate(['messages'])
      })
  }

  /**
   * retourne Observable de l'https client
   * équivalent de BehaviorSubject
   */
  // getObservable(): Observable<Message[]> {
  //   return this.http
  //     .get<Message[]>('http://localhost:3000/message')
  // }

  reload(): void {
    this.http
      .get<Message[]>('http://localhost:3000/message')
      .toPromise()
      .then(m => this.subject.next(m))
  }

  getHello() {
    // return this.http.get('http://localhost:3000/getMessages', {
    //   headers,
    //   // observe: 'response',
    //   responseType: 'json'
    // }).toPromise();
    // return this.http.get('http://localhost:3000/getMessages', {
    //   headers: { 'Access-Control-Allow-Origin': '*' }
    // }).toPromise();
    const httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Cache-Control', 'no-cache')
      .set('Content-Type', 'application/json');
    const options = { headers: httpHeaders };

    return this.http.get('http://localhost:3000/getMessages', options).toPromise();
  }

  getMsg() {
    const httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
    // .set('Cache-Control', 'no-cache')
    // .set('Content-Type', 'application/json');
    const options = { headers: httpHeaders };

    return this.http
      .get<Message[]>("http://localhost:3000/getMessages", options)
      .toPromise();
  }

  getById(id: number): Message | undefined {
    // return this.msg[id];

    return this.msg.find(e => e.id === id);
  }

  create(message: Message): void {
    const httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Cache-Control', 'no-cache')
      .set('Content-Type', 'application/json');
    const options = { headers: httpHeaders };

    this.http
      .post<Message>("http://localhost:3000/create-message", JSON.stringify(message), options)
      .toPromise()
      .then(m => {
        // Add to list of msgs
        // will be overwritten at InboxComponent though
        this.msg.push(m)
        console.log(this.msg);

        this.router.navigate(['messages']);
      })
  }

  getLastId() {
    const httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
    // .set('Cache-Control', 'no-cache')
    // .set('Content-Type', 'application/json');
    const options = { headers: httpHeaders };

    return this.http.get('http://localhost:3000/getLastId', options).toPromise()
  }
}
