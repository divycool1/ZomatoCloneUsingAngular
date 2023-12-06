import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  

  apiEndPoint: string = "https://freeapi.miniprojectideas.com/api/zomato/";

  constructor(private http: HttpClient) {}

   foodArr = {
    "message": "",
    "result": true,
    // "data": [
    //   {
    //     "categoryId": 14,
    //     "categoryName": "pizza",
    //     "photoUrl": "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    //   },
    //   {
    //     "categoryId": 15,
    //     "categoryName": "Burger",
    //     "photoUrl": "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    //   },
    //   {
    //     "categoryId": 18,
    //     "categoryName": "Sandwich",
    //     "photoUrl": "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png"
    //   }
    // ]
  }

  // getAllFoods() :any{
  //   return this.foodArr;
  // }
  
  getAllFoods():Observable<any>{
    return this.http.get(this.apiEndPoint+"GetAllFoodCategory");
  }

  GetRestaurantServingByCategoryId(foodCategoryId:number):Observable<any>{
    return this.http.get(this.apiEndPoint+'GetRestaurantServingByCategoryId?categoryId='+foodCategoryId);
  }

  GetFoodItemOfRestaurantByCategory(restaurantId:number,categoryId:number):Observable<any>{
    return this.http.get(this.apiEndPoint+'GetFoodItemOfRestaurantByCategory?restaurantId='+restaurantId+'&categoryId='+categoryId)
  }


  onRegister(obj:any):Observable<any>{
    return this.http.post(this.apiEndPoint+'AddNewUser', obj);
  }

  onLogin(obj:any):Observable<any>{
    return this.http.post(this.apiEndPoint+'login', obj);
  }

  AddToCart(obj:any):Observable<any>{
    return this.http.post(this.apiEndPoint+'AddToCart', obj);
  }

  GetCartItemsByCustomerIdForRestaurant(custId:number,resId:number):Observable<any>{
    return this.http.get(this.apiEndPoint+'GetCartItemsByCustomerIdForRestaurant?customerId='+custId+'&restaurantId='+resId);
  }

  PlaceOrder(obj:any):Observable<any>{
    return this.http.post(this.apiEndPoint+'AddNewOrder', obj);
  }

 





  
}
