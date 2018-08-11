import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

//import 'rxjs/add/operator/toPromise';

//import 'rxjs/Rx';
//import 'rxjs/add/operator/toPromise';
//import 'rxjs/Observable';

//import { Observable } from 'rxjs/Observable';

import { Observable, Subject } from 'rxjs';

import {Todo} from '../models/todo';

@Injectable()
export class TodoService {
    //private headers = new Headers({'Content-type': 'application/json'});
    
    private headers = new Headers({
        'method': 'GET', 'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*', 'charset': 'UTF - 8'
    });

    private todosApiUrl = 'http://localhost:3000/api/todos/test1'
                            //'api/todos/test';

    constructor(private http: Http) {
    
    }

    getTodos(): Promise<Todo[]> {
        return this.http.get(this.todosApiUrl)
        .toPromise()
        .then(response => response.json() as Todo[])
    }
}