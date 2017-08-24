import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutModule } from './about.component';

describe('AboutModule', () => {
  let component: AboutModule;
  let fixture: ComponentFixture<AboutModule>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
