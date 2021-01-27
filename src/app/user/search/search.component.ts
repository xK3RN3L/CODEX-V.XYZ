import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { UserService } from '../user.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  form: FormGroup;
  items: Observable<any>;
  selectedPerson: string;
  @Output() autoSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
  searchText: string = '';
  constructor(private fb: FormBuilder,
    private userService: UserService) { }

  ngOnInit(): void {
    this.buildForm();
    this.items = this.userService.fetchUsers();
  }

  buildForm(): void {
    this.form = this.fb.group({
      name: new FormControl(''),
      prefix: new FormControl(''),
      position: new FormControl(''),
      gender: new FormControl('')
    });
  }

  search(filters: any): void {
    Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
    this.groupFilters.emit(filters);
  }

}