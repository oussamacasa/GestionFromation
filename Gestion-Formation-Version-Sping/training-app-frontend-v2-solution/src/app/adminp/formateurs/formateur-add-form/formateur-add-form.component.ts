import { Component, OnInit } from '@angular/core';
import {FormateurHttpService} from '../formateur-http.service';

@Component({
  selector: 'app-formateur-add-form',
  templateUrl: './formateur-add-form.component.html',
  styleUrls: ['./formateur-add-form.component.css']
})
export class FormateurAddFormComponent implements OnInit {

  constructor(private  formateurhttp: FormateurHttpService) { }

  ngOnInit() {
  }
  addFormateur(formateurItem) {
    console.log(formateurItem['name']);
      const formateur = {
     "name": formateurItem['name'],
    "lastname":formateurItem['lastname'],
    "email":formateurItem['email'],
    "adress": formateurItem['adress'],
    "tel": formateurItem['tel'],
    };
      
    this.formateurhttp.addFormateur(formateur).subscribe(res => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
  }

}
