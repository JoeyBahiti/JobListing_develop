import { Component, OnInit, ChangeDetectorRef, OnDestroy, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { timer } from 'rxjs';
import { Subscription } from 'rxjs';

import { AuthenticationService } from 'src/app/core/services/auth.service';
import { SpinnerService } from '../../core/services/spinner.service';


@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
    logged_user!: any;
    private _mobileQueryListener: () => void;
    mobileQuery: MediaQueryList;
    showSpinner: boolean = false;
    userName: string = "";
    id: any;
    personalData: any;
    @Output() isLogout = new EventEmitter<void>()
    private autoLogoutSubscription: Subscription = new Subscription;

    constructor(private changeDetectorRef: ChangeDetectorRef,
        public firebaseService: AuthenticationService,
        private media: MediaMatcher,
        public spinnerService: SpinnerService,
        private authService: AuthenticationService,
    ) {

        this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    logout() {
        this.authService.logout();
    }

    ngOnInit(): void {
        let authToken = window.localStorage.getItem('role');
        this.id = localStorage.getItem('id');
        this.logged_user = authToken;
        this.authService.getUserById(this.id).subscribe(data => {
            this.personalData = data.data;
        })
        const user = this.authService.getCurrentUser();
        const timer$ = timer(2000, 5000);

    }



}
