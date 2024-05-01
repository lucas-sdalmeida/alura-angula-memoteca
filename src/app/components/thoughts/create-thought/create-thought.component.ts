import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {
  thought: Thought = {
    id: 0,
    content: '',
    authorship: '',
    model: '',
  }

  constructor(
    private service: ThoughtService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  createThought() {
    this.service
      .post(this.thought)
      .subscribe(() => this.router.navigate(['/list-thoughts']))
  }
}
