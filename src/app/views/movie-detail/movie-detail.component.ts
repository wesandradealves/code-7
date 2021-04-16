import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../../services/api.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  host: {
      class:'pg-detail'
  }
})
export class MovieDetailComponent implements OnInit {
  movie: Array <any> = [];

  constructor(
    private _Location: Location,
    private _ActivatedRoute: ActivatedRoute, 
    private _AppService: AppService) { }

  ngOnInit() {
    this._AppService.getJSON().subscribe(response => {
      this.movie = response.data.filter(movie => movie.nome == this._ActivatedRoute.params['_value'].id)[0];
    })
  }

  goBack() {
    this._Location.back();
  }
}
