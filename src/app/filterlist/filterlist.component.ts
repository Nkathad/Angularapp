import { Component, OnInit } from '@angular/core';
import { MoviepipePipe } from '../moviepipe.pipe';

@Component({
  selector: 'app-filterlist',
  templateUrl: './filterlist.component.html',
  styleUrls: ['./filterlist.component.css']

})
export class FilterlistComponent implements OnInit {
  pageTitle = "My Filter"
  movies = [
    {title: 'Hum aapke hai kon', director: 'Vishal', mpaa: 'Salman'},
    {title: 'Koi Mil Gaya', director: 'Om', mpaa: 'Juhila'},
    {title: 'Raaz', director: 'Ajay', mpaa: 'Amir'},
    {title: 'Dil hai tumara', director: 'Kaya', mpaa: 'Rakesh'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
