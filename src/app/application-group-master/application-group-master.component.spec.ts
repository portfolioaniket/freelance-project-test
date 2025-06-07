import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationGroupMasterComponent } from './application-group-master.component';

describe('ApplicationGroupMasterComponent', () => {
  let component: ApplicationGroupMasterComponent;
  let fixture: ComponentFixture<ApplicationGroupMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationGroupMasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationGroupMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
