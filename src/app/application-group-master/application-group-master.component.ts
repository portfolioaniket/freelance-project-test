import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-application-group-master',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './application-group-master.component.html',
  styleUrl: './application-group-master.component.css'
})
export class ApplicationGroupMasterComponent {
 applicationGroups = [
  { groups: 'Education', name: 'Uncategorized', priority: '', action: true },
  { groups: 'Email', name: 'Uncategorized', priority: '', action: true },
  { groups: 'Entertainment', name: 'Uncategorized', priority: '', action: true },
  { groups: 'Marketing', name: 'Uncategorized', priority: '', action: true },
  { groups: 'News', name: 'Uncategorized', priority: '', action: true },
  { groups: 'Office Apps', name: 'Uncategorized', priority: '', action: true },
  { groups: 'Others', name: 'Uncategorized', priority: '', action: false },
  { groups: 'Social Media', name: 'Uncategorized', priority: '', action: true }
];
showEmpty =false;
test(){
  console.log(this.showEmpty)
}
}
