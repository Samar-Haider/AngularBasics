import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentIteractionTestComponent } from './component-iteraction-test.component';

describe('ComponentIteractionTestComponent', () => {
  let component: ComponentIteractionTestComponent;
  let fixture: ComponentFixture<ComponentIteractionTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentIteractionTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentIteractionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
