import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  childValue!: string;

  jobs: string = 'test';
  constructor() { }
  @Input() data!: string
  ngOnInit(): void {
    console.log(this.data)
  }


  @Output() sendChildValue: EventEmitter<string> = new EventEmitter<string>();


  sendValueToParent() {
    this.sendChildValue.emit(this.childValue);
  }
}
