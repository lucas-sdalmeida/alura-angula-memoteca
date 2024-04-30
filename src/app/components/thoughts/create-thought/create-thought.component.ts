import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {
  thought = {
    id: 0,
    content: '',
    authorship: '',
    model: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  createThought() {

  }

}
