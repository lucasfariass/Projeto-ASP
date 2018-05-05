import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadroClinicoComponent } from './quadro-clinico.component';

describe('QuadroClinicoComponent', () => {
  let component: QuadroClinicoComponent;
  let fixture: ComponentFixture<QuadroClinicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadroClinicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadroClinicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
