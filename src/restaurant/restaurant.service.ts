import { Injectable } from '@nestjs/common';

@Injectable()
export class RestaurantService {

    restaurants = [];
    constructor() {
     let restaurant = {
            "id":"1",
            "name":"Pizzeria la vuelta al mundo",
            "address":"Avenida Peron 123",
            "phone":"2494123456"
        };
        this.restaurants.push(restaurant);
    }
    getRestaurant() {
        
        return this.restaurants;
    }
}
