import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { Thought } from '../thought';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exclude-thought',
  templateUrl: './exclude-thought.component.html',
  styleUrls: ['./exclude-thought.component.css']
})
export class ExcludeThoughtComponent implements OnInit {
  thought: Thought = {
    id: 0,
    content: '',
    authorship: '',
    model: '',
  }

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route
      .snapshot
      .paramMap
      .get('id')
    this.service
      .getById(parseInt(id!))
      .subscribe(thought => this.thought = thought)
  }

  deleteThought() {
    this.service
      .delete(this.thought.id)
      .subscribe(() => this.router.navigate(['/list-thoughts']))
  }

  cancel() {
    this.router.navigate(['/list-thoughts'])
  }
}
