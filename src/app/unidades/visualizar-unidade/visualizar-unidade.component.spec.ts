import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarUnidadeComponent } from './visualizar-unidade.component';

describe('VisualizarUnidadeComponent', () => {
  let component: VisualizarUnidadeComponent;
  let fixture: ComponentFixture<VisualizarUnidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarUnidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
