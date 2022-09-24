import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoFicaComponent } from './como-fica.component';

describe('ComoFicaComponent', () => {
  let component: ComoFicaComponent;
  let fixture: ComponentFixture<ComoFicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoFicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoFicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
