import { Component, OnInit } from '@angular/core';
import { Facility } from '../../api/facility';
import { FacilityServiceService} from '../../services/facility-service.service';

@Component({
  selector: 'app-use-facility-page',
  templateUrl: './use-facility-page.component.html',
  styleUrls: ['./use-facility-page.component.scss'],
})
export class UseFacilityPageComponent implements OnInit {

  facilities: Facility[];
  guest_id: number;

  constructor(private facility: FacilityServiceService) { }

  ngOnInit() {
    this.getFacilities();
  }

  getIcon(type: string) {
    const icons = {POOL: 'pool', GYM: 'fitness_center', SPA: 'spa'};

    return icons[type];
  }

  getFacilities() {
    this.facility.getFacilities().then((data:any[]) => {
      this.facilities = data;
    }).catch(error=> {
      console.log(error);
    });
  }

  useFacility(id: number) {
    this.facility.useFacility(this.guest_id, id).then(()=> {
      alert("Success");
    }).catch(error => {
      console.log(error);
      alert("Failed");
    });
  }

}
