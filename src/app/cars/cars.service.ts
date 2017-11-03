import { Injectable } from '@angular/core';
import { HttpService } from "../shared/core/http.service";

@Injectable()
export class CarsService {

  constructor(private httpService: HttpService) { }

  add(car) {
    return this.httpService.post('cars/create/', car, true);
  }

}
