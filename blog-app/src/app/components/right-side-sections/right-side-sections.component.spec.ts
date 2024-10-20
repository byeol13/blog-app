import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideSectionsComponent } from './right-side-sections.component';

describe('RightSideSectionsComponent', () => {
  let component: RightSideSectionsComponent;
  let fixture: ComponentFixture<RightSideSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightSideSectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightSideSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
