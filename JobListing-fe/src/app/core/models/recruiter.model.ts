import { Job } from "./job.model";

export class Recruiter {
    id!: number;
    name!: string;
    email!: string;
    phone!: string;
    company!: string;
    jobs!: Job[];
}