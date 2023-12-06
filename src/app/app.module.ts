import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodsComponent } from './components/foods/foods.component';
import { RestaurantServingFoodComponent } from './components/restaurant-serving-food/restaurant-serving-food.component';
import { RestaurantFoodItemComponent } from './components/restaurant-food-item/restaurant-food-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
// import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FoodsComponent,
    RestaurantServingFoodComponent,
    RestaurantFoodItemComponent
  ],
  imports: [
    // AlertModule.forRoot()
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
