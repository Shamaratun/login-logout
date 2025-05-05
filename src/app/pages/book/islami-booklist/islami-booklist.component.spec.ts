import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslamiBooklistComponent } from './islami-booklist.component';

describe('IslamiBooklistComponent', () => {
  let component: IslamiBooklistComponent;
  let fixture: ComponentFixture<IslamiBooklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IslamiBooklistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IslamiBooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
