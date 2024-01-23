import { Component, ElementRef, ViewChild } from '@angular/core';
import {LocationService} from "../location.service";

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {
  @ViewChild('zipcode') zipcode: ElementRef;

  constructor(private service : LocationService) { }

  addLocation(zipcode : string){
    if(!zipcode){alert('You must enter a value'); return;}
    this.service.addLocation(zipcode);
    this.zipcode.nativeElement.value = '';
  }

}
