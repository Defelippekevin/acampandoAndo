import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcampandoProductosComponent } from './acampando-productos.component';

describe('AcampandoProductosComponent', () => {
  let component: AcampandoProductosComponent;
  let fixture: ComponentFixture<AcampandoProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcampandoProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcampandoProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
