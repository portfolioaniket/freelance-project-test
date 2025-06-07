import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [NgIf],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  teamsData=['Support Team', 'time champ', 'Pse', 'Dev Team', 'QA', 'QA Team', 'SPT', 'Sales Team', 'Marketing']
  isEditingGroup=false
  openModal(){
    this.isEditingGroup=true
  }
  closeModal(){
    this.isEditingGroup=false
  }
}
