import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSideMenuComponent } from './custom-side-menu.component';

describe('CustomSideMenuComponent', () => {
  let component: CustomSideMenuComponent;
  let fixture: ComponentFixture<CustomSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSideMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
