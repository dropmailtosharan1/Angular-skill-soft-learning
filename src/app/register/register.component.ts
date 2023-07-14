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
    if (this.formRegister.valid) {
      const formData = {
        username: this.formRegister.value.username,
        password: this.formRegister.value.password
      };

      console.log('Form Data:', formData);
     // Make the HTTP request
      this.http.post(this.url, this.formRegister.value).subscribe(
        response => {
          console.log('Response:', response);
          // this.formRegister.reset(); // Reset the form after successful request
        },
        error => {
          console.error('Error:', error);
        }
      );
    }
  }
}
