import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/service/food.service';

@Component({
  selector: 'app-restaurant-food-item',
  templateUrl: './restaurant-food-item.component.html',
  styleUrls: ['./restaurant-food-item.component.css']
})
export class RestaurantFoodItemComponent {
PlaceOrder() {
    const obj = {    
        "userId": this.loggedUserData.userId,
        "totalAmount": this.totalAmount,
        "restaurantId": this.restaurantId,
        "deliveryAddress": this.deliveryAddress
    };

    this.foodService.PlaceOrder(obj).subscribe((res:any)=>{
      if(res.result){
        alert('Order placed successfully');
        this.GetCartItemsByCustomerIdForRestaurant();
        this.deliveryAddress='';
        this.totalAmount=0;
      }
      else{
        alert(res.message);
      }
    });
}

  addToCart(itemId: number) {
    const loginCheck = localStorage.getItem('Zomato_user')
    if (loginCheck == null) {
      alert('Kindly login before placing an order');
    }
    else {
      this.loggedUserData = JSON.parse(loginCheck)
      const obj = {
        "customerId": this.loggedUserData.userId,
        "itemId": itemId,
        "quantity": 1
      };
      this.foodService.AddToCart(obj).subscribe((res: any) => {
        if (res.result) {
          alert(res.message);
          this.GetCartItemsByCustomerIdForRestaurant();
         
        } else {
          alert(res.message);
        }
      });

    }
  }


  GetCartItemsByCustomerIdForRestaurant() {
    this.foodService.GetCartItemsByCustomerIdForRestaurant(this.loggedUserData.userId, this.restaurantId).subscribe((res: any) => {
      this.cartItems = res.data;
      this.cartItems.forEach(element => {
        this.totalAmount = this.totalAmount + element.price;
      });
    })
  }

  restaurantId: number = 0;
  categoryId: number = 0;
  foodItemsList: any[] = [];
  cartItems: any[] = [];
  loggedUserData: any;
  totalAmount: number = 0;
  deliveryAddress: string = '';

  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService) {
    this.activatedRoute.params.subscribe((res: any) => {

      // debugger;
      this.restaurantId = res.restaurantId;
      this.categoryId = res.categoryId;
      this.GetFoodItemOfRestaurantByCategory();
      this.GetCartItemsByCustomerIdForRestaurant()
      const loginCheck = localStorage.getItem('Zomato_user')
      if (loginCheck !== null) {
        // alert('Kindly login before placing an order');
        this.loggedUserData = JSON.parse(loginCheck);
      }
    })


  }


  GetFoodItemOfRestaurantByCategory() {
    this.foodService.GetFoodItemOfRestaurantByCategory(this.restaurantId, this.categoryId).subscribe((res: any) => {
      this.foodItemsList = res.data;
    })
  }
}
