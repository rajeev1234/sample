import { Component, OnInit } from '@angular/core';
import {Registration} from '../registration';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {
    registrations: Registration[] = [];
// It maintains registration Model
regModel: Registration;
// It maintains registration form display status. By default it will be false.
showNew: Boolean = false;
// It will be either 'Save' or 'Update' based on operation.
submitType: string = 'Save';
// It maintains table row index based on selection.
selectedRow: number;
// It maintains Array of countries.
countries: string[] = ['US', 'UK', 'India', 'UAE'];

  constructor() { }

  ngOnInit() {
  }

}
