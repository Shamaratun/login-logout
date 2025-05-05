import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryCrudListComponent } from './catagory-crud-list.component';

describe('CatagoryCRUDListComponent', () => {
  let component: CatagoryCrudListComponent;
  let fixture: ComponentFixture<CatagoryCrudListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatagoryCrudListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatagoryCrudListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
