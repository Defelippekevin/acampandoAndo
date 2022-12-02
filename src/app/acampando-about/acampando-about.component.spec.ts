import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcampandoAboutComponent } from './acampando-about.component';

describe('AcampandoAboutComponent', () => {
  let component: AcampandoAboutComponent;
  let fixture: ComponentFixture<AcampandoAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcampandoAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcampandoAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
