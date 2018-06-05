import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresYLibrosComponent } from './autores-ylibros.component';

describe('AutoresYLibrosComponent', () => {
  let component: AutoresYLibrosComponent;
  let fixture: ComponentFixture<AutoresYLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoresYLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresYLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
