import { Injectable } from '@angular/core';
import { HttpService } from "../shared/core/http.service";

@Injectable()
export class CarsService {

  constructor(private httpService: HttpService) { }

  add(car) {
    return this.httpService.post('cars/create/', car, true);
  }

  allCars(page = 1, searchText = null) {
    let url = `cars/all?page=${page}`;
    if (searchText) {
      url += `&search=${searchText}`
    }

    return this.httpService.get(url);
  }

  details(id) {
    let url = `cars/details/${id}`
    return this.httpService.get(url, true);
  }

  like(id){
    return this.httpService.post(`cars/details/${id}/like`, {}, true);
  }

  addReview(id, review){
    return this.httpService.post(`cars/details/${id}/reviews/create`, review, true);
  }

  getReviews(id){
    return this.httpService.get(`cars/details/${id}/reviews`, true);
  }

  userCars(){
    return this.httpService.get('cars/mine', true);
  }

  delete(id){
    return this.httpService.post(`cars/delete/${id}`, {}, true)
  }
  


}
