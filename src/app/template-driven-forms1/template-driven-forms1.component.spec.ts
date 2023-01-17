import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenForms1Component } from './template-driven-forms1.component';

describe('TemplateDrivenForms1Component', () => {
  let component: TemplateDrivenForms1Component;
  let fixture: ComponentFixture<TemplateDrivenForms1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenForms1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenForms1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
