import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicationGroupsComponent } from './application-groups/application-groups.component';
import { TeamsComponent } from './teams/teams.component';
import { UsersComponent } from './users/users.component';
import { ProductivityProfileComponent } from "./productivity-profile/productivity-profile.component";
import { MappingComponent } from "./mapping/mapping.component";
import { ApplicationGroupMasterComponent } from "./application-group-master/application-group-master.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, ProductivityProfileComponent, MappingComponent, ApplicationGroupMasterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedTab = 'Productivity'
  title = 'Freelance-UI';
  setTab(tabname:string){
    this.selectedTab=tabname
  }
}
