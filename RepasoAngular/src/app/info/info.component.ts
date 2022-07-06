import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() nombre:string=''

  @Input() fechaNacimiento:string="06/28/2022"

  @Input() nacionalidad:string=''

  constructor() { }

  ngOnInit(): void {
  }

}
