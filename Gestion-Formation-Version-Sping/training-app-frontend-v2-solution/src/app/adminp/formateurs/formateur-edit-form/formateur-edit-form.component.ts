import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {ActivatedRoute} from '@angular/router';
import {FormateurHttpService} from '../formateur-http.service';

@Component({
  selector: 'app-formateur-edit-form',
  templateUrl: './formateur-edit-form.component.html',
  styleUrls: ['./formateur-edit-form.component.css']
})
export class FormateurEditFormComponent implements OnInit {
  id;
  private sub: any;
  formateur:any;
    constructor(private router: Router, private route: ActivatedRoute, 
       private  formateurhttp: FormateurHttpService) { }
      ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
        this.id = params['id']; // (+) converts string 'id' to a number
      });
      console.log('Formateur ID ' + this.id.toString());
        this.formateurhttp.getFormateur(this.id.toString())
      .subscribe(data => {
        console.log(data);
        this.formateur = data;
      });
    }
  editFormateur(formateurItem) {
      console.log(formateurItem);
      formateurItem.id = this.id;
      console.log('Formateur ID' + formateurItem.id);
      this.formateurhttp.updateFormateur(formateurItem).subscribe(res => {
          console.log(res);
        }, (err) => {
          console.log(err);
        });
       // this.router.navigate(['../../adminp/sessions/list']);
        //location.reload();
    }
  }

