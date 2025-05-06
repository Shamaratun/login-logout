import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SListComponent } from './slist.component';

describe('SListComponent', () => {
  let component: SListComponent;
  let fixture: ComponentFixture<SListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
