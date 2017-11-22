import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Facility } from '../api/facility';
import { HOST } from '../settings';

@Injectable()
export class FacilityServiceService  {

  constructor(private http: HttpClient) { }

  getFacilities(): Promise<Facility[]> {
    return new Promise((resolve, reject) => {
      this.http.get(`${HOST}/get_facilities.php`).subscribe((data:any[]) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  useFacility(guest_id:number, facility_id: number): Promise<any> {
    let formData = new FormData();
    formData.append("guest_id", guest_id.toString());
    formData.append("facility_id", facility_id.toString());
    formData.append("date", new Date().toISOString().split('T')[0]);

    return new Promise((resolve, reject) => {
      this.http.post(`${HOST}/use_facility.php`, formData).subscribe(()=> {
        resolve();
      }, error => {
        reject(error);
      });
    });
  }

  getUserFacilities(guest_id: number): Promise<Facility[]> {
    let formData = new FormData();
    formData.append("guest_id", guest_id.toString());
    return new Promise((resolve, reject) => {
      this.http.post(`${HOST}/get_user_facilities.php`, formData).subscribe((data) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

}
