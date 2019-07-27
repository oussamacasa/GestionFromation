import { Component, OnInit ,Input} from '@angular/core';
import { Formateur } from '../formateur';
import { Observable} from 'rxjs';
import {FormateurHttpService} from '../formateur-http.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-formateur-item-list',
  templateUrl: './formateur-item-list.component.html',
  styleUrls: ['./formateur-item-list.component.css']
})
export class FormateurItemListComponent implements OnInit {
  @Input() formateur;
  formateurItems: Observable<Formateur[]>;
  constructor(private router: Router, private  formateurhttp: FormateurHttpService) { }

  ngOnInit() {
    this.formateurItems = this.formateurhttp.getFormateursObservable();
   
  }
  onDelete(id) {
    this.formateurhttp.deleteFormateur(id).subscribe(res => {
          console.log(res);
        }, (err) => {
          console.log(err);
        });
        this.router.navigate(['../../adminp/formateurs/list']);
        location.reload();
    }
}
