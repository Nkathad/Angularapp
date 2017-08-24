import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'moviepipe'
})
export class MoviepipePipe implements PipeTransform {

  transform(movies: any, term: any): any {
    if(term === undefined) return movies;
    return movies.filter(function(movie){
      return movie.title.toLowerCase().includes(term.toLowerCase());
    })
    // let filter = term[0].toLocaleLowerCase();
    // return filter ? movies.filter(movies=> movies.title.toLocaleLowerCase().indexOf(filter) != -1) : movies;
  }

}
