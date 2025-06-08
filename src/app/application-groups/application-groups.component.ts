import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-application-groups',
  standalone: true,
  imports: [NgClass, NgFor, FormsModule, NgIf],
  templateUrl: './application-groups.component.html',
  styleUrl: './application-groups.component.css'
})
export class ApplicationGroupsComponent {

  searchText =''
    applicationGroups = [
    { name: 'Education', isProductive: false, isNonProductive: true },
    { name: 'Emails', isProductive: false, isNonProductive: false },
    { name: 'Entertainment', isProductive: false, isNonProductive: false },
    { name: 'Marketing', isProductive: false, isNonProductive: false },
    { name: 'News', isProductive: false, isNonProductive: false },
    { name: 'Office Apps', isProductive: false, isNonProductive: false },
    { name: 'Others', isProductive: true },
    { name: 'Social Media', isProductive: false, isNonProductive: false }
  ];
  setProductive(i:number){
    this.applicationGroups[i].isNonProductive=false;
    this.applicationGroups[i].isProductive = !this.applicationGroups[i].isProductive;
  }
  setNonProductive(i:number){
    this.applicationGroups[i].isNonProductive=!this.applicationGroups[i].isNonProductive;
    this.applicationGroups[i].isProductive = false;
  }
  onChange(){
    console.log("Saf")
    console.log(this.searchText)
  }
}
