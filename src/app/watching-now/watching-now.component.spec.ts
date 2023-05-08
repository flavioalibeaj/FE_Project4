import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchingNowComponent } from './watching-now.component';

describe('WatchingNowComponent', () => {
  let component: WatchingNowComponent;
  let fixture: ComponentFixture<WatchingNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchingNowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchingNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
