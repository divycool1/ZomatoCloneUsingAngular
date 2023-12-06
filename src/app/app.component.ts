import { Component } from '@angular/core';
import { FoodService } from './service/food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

onLogOff() {
  // localStorage.removeItem('Zomato_user');
  this.loggedUserData = null;
}

  constructor(private foodService: FoodService){
    const isLocalData = localStorage.getItem('Zomato_user')
    if(isLocalData!=null){
      this.loggedUserData = JSON.parse(isLocalData);
    }
  }


OnRegistration() {
    this.foodService.onRegister(this.registerObj).subscribe((res:any)=>{
      if(res.result){
        this.onRegisterClose();
        alert(res.message);
        localStorage.setItem('Zomato_user',JSON.stringify(res.data));
        this.loggedUserData=res.data
      }
      else{
        alert(res.message);
      }
    });
}


OnLoginSuccess() {
    this.foodService.onLogin(this.loginObj).subscribe((res:any)=>{
      if(res.result){
        this.onLoginClose();
        alert(' Login success ');
        // localStorage.setItem('Zomato_user',JSON.stringify(res.data));
        // this.loggedUserData=res.data
      }
      else{
        alert(res.Message);
      }
    });
}

  registerObj: any = {
      "userId": 0,
      "userName": "",
      "role": "Customer",
      "password": "",
      "mobileNo": "",
      "emailId": "",
      "restaurantId": 0
  };

  loginObj: any = {
      "userName": "",
      "password": ""  
  }

  loggedUserData:any;

onRegister() {
   const model = document.getElementById('registerModal');
   if(model!=null){
    model.style.display='block';
   }
}
onLogin() {
  const model = document.getElementById('loginModal');
   if(model!=null){
    model.style.display='block';
   }
}
onRegisterClose() {
  const model = document.getElementById('registerModal');
  if(model!=null){
   model.style.display='none';
  }
}
onLoginClose() {
 const model = document.getElementById('loginModal');
  if(model!=null){
   model.style.display='none';
  }
}


  title = 'Zomato_Clone_Using_Angular';
}
