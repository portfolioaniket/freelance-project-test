import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ApplicationGroupsComponent } from '../application-groups/application-groups.component';
import { TeamsComponent } from '../teams/teams.component';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-productivity-profile',
  standalone: true,
  imports: [NgClass, NgFor, ApplicationGroupsComponent, TeamsComponent, UsersComponent],
  templateUrl: './productivity-profile.component.html',
  styleUrl: './productivity-profile.component.css'
})
export class ProductivityProfileComponent {
   selectedTab = 'Application'
  title = 'Freelance-UI';
  setTab(tabname:string){
    this.selectedTab=tabname
  }

}
