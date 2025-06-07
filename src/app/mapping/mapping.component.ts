import { Component } from '@angular/core';

@Component({
  selector: 'app-mapping',
  standalone: true,
  imports: [],
  templateUrl: './mapping.component.html',
  styleUrl: './mapping.component.css'
})
export class MappingComponent {
  isModalOpen =false;
  isNewRuleModalOpen=false;
  openModal(){
    this.isModalOpen=true
  }
  closeModal(){
    this.isModalOpen=false
  }
  openNewRuleModal(){
    this.isNewRuleModalOpen=true;
  }
  closeNewRuleModal(){
    this.isNewRuleModalOpen=false
  }

}
