import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    isLoading = false;
    loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]]
    });
    registerForm = this.fb.group({
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
    });

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private titleService: Title,
        private notificationService: NotificationService,
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit() {
        this.titleService.setTitle('Login');
        this.authenticationService.logout();
    }

    Proceedlogin() {
        this.isLoading = true;
        this.authenticationService.proceedLogin(this.loginForm.value).subscribe(
            (data: any) => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('id', data.id);
                localStorage.setItem('role', data.roles[0]);
                this.router.navigate(['/']);
            },
            error => {
                this.notificationService.openSnackBar(error.error.message);
                this.isLoading = false;
            }
        );
    }

    registerUser() {
        this.isLoading = true;
        this.authenticationService.registerUser(this.registerForm.value).subscribe(
            result => (this.isLoading = false, console.log(result), this.notificationService.openSnackBar('Registration went successfully! Login to continue')),
            error => (this.isLoading = false, console.error(error), error.status === 400 ? console.error('Bad Request:', error.error) : error.status === 401 ? console.error('Unauthorized:', error.error) : error.status === 404 ? console.error('Not Found:', error.error) : error.status === 500 ? console.error('Internal Server Error:', error.error) : console.error('Unexpected error:', error))
        );
    }



}
