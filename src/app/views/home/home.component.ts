import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: Array<any>;

  constructor(private route: ActivatedRoute, private router: Router, private apiService: AppService) {}

  ngOnInit() {
    this.apiService.getJSON().subscribe(response => {
      this.movies = response.data;
    }) 
  }

  gotoDetail(movie): void {
    this.router.navigate(['/movie', movie.nome]);
  }  

}
