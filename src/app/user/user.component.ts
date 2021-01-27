import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent  {

  searchText: string;
  filters: Object;

  constructor() {}

}