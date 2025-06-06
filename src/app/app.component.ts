import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicationGroupsComponent } from './application-groups/application-groups.component';
import { TeamsComponent } from './teams/teams.component';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgClass, NgFor, ApplicationGroupsComponent, TeamsComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedTab = 'Application'
  title = 'Freelance-UI';
  setTab(tabname:string){
    this.selectedTab=tabname
  }
}
