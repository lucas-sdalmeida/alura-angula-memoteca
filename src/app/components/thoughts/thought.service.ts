import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Thought } from './thought';

const URL = 'http://localhost:3500/thoughts'

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {
  constructor(private client: HttpClient) { }

  getAll() {
    return this.client.get<Thought[]>(URL)
  }

  post(thought: Thought) {
    return this.client.post<Thought>(URL, thought)
  }
}

