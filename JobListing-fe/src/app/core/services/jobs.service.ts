import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Job } from "../models/job.model";

@Injectable({
    providedIn: 'root'
})
export class JobsService {
    baseUrl = environment.url;
    headers: HttpHeaders;

    constructor(
        private http: HttpClient,
        @Inject('LOCALSTORAGE') private localStorage: Storage
    ) {
        const authToken = window.localStorage.getItem('token');
        this.headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    }

    getFilteredJobs(isAscending: boolean, pageNumber: number, pageSize: number, author?: number): Observable<any> {
        let params = new HttpParams()
            .set('filterSorting', 'title')
            .set('isAscending', isAscending.toString())
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString());
        if (author) {
            params = params.set('author', author.toString());
        }
        return this.http.get(`${this.baseUrl}/action/all/jobs`, { headers: this.headers, params });
    }

    getAppliedJobs(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/action/job/get/applied?id=${id}`, { headers: this.headers });
    }

    getFavoriteJobs(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/action/job/get/favorite?id=${id}`, { headers: this.headers });
    }

    getJobDetails(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/action/job/details?id=${id}`, { headers: this.headers });
    }

    deleteJob(id: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/action/job/delete?id=${id}`, { headers: this.headers });
    }

    makeJobFavorite(id: number): Observable<any> {
        return this.http.post(`${this.baseUrl}/action/job/add/favorite?id=${id}`, id, { headers: this.headers });
    }

    createJob(job: Job): Observable<any> {
        return this.http.post(`${this.baseUrl}/action/job/add`, job, { headers: this.headers });
    }

    updateJob(job: Job): Observable<any> {
        return this.http.put(`${this.baseUrl}/action/job/update`, job, { headers: this.headers });
    }
}
