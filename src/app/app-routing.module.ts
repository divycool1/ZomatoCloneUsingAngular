import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsComponent } from './components/foods/foods.component';
import { RestaurantServingFoodComponent } from './components/restaurant-serving-food/restaurant-serving-food.component';
import { RestaurantFoodItemComponent } from './components/restaurant-food-item/restaurant-food-item.component';

const routes: Routes = [
  {
    path:'restaurant-foods/:id',
    component:RestaurantServingFoodComponent
  },
  {
    path:'foods',
    component:FoodsComponent
  },
  
  {
    path:'restaurant-food-items/:restaurantId/:categoryId',
    component:RestaurantFoodItemComponent
  },
  {
    path:'**',
    component:FoodsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
