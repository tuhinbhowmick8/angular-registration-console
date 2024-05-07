import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';

  data = {
    "firstname": "",
    "lastname": "",
    "email": "",
    "phone": "",
    "age": "",
    "address": "",
    "password": "",
    "reenterpassword": "",

  }



  userLogin() {
  
  if(this.data.firstname == "" || this.data.firstname == undefined){
    alert("Please Enter First Name");
    return
  }
  if(this.data.lastname == "" || this.data.lastname == undefined){
    alert("Please Enter Last Name");
    return
  }
  if(this.data.email == "" || this.data.email == undefined){
    alert("Please Enter Email");
    return
  }
  if(this.data.phone == "" || this.data.phone == undefined){
    alert("Please Enter Mobile No.");
    return
    }
    if(this.data.phone.toString().length != 10 ){
      alert("Please Enter Valid Mobile No.");
      return
    }
    if(this.data.age == "" || this.data.age == undefined){
      alert("Please Enter Correct Age");
      return
    }
    
    if(this.data.password == "" || this.data.password == undefined){
      alert("Please Enter Password");
      return
    }
    if(this.data.reenterpassword == "" || this.data.reenterpassword == undefined){
      alert("Please Re-Enter Password");
      return
    }
    if(this.data.password !=this.data.reenterpassword){
      alert("Password Mismatch")
      return
    }



    console.log(this.data)
    

    
  }


}
