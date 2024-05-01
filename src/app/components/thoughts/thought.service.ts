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

  getById(id: number) {
    return this.client.get<Thought>(`${URL}/${id}`)
  }

  post(thought: Thought) {
    return this.client.post<Thought>(URL, thought)
  }

  delete(id: number) {
    return this.client.delete<Thought>(`${URL}/${id}`)
  }

  put(thought: Thought) {
    return this.client.put<Thought>(`${URL}/${thought.id}`, thought)
  }
}

