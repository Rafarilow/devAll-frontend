import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPostComponent } from './last-post.component';

describe('LastPostComponent', () => {
  let component: LastPostComponent;
  let fixture: ComponentFixture<LastPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
