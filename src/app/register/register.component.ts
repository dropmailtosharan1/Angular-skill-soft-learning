import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  formRegister: FormGroup;
  url='http://localhost:3000/employees';

  constructor(private http:HttpClient) {
    this.formRegister = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {}

  onSubmit(){
    this.http.post(this.url, this.formRegister.value).subscribe(
      response=> console.log(response)
      
      // response =>{
      //   console.log('Request Successful:', response);        
      // },
      // error =>{
      // console.error('Request Failed:',error);
      // }      
    );
    // if (this.formRegister.valid) {
    // Form is valid, perform the desired actions here
    //   console.log(this.formRegister.value);
    // }
    //  else {
    // Form is invalid, display error messages or handle as needed
    // }
  }
}
