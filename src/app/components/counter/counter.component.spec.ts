import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment based on argument', () => {
    component.increaseBy(2);
    expect(component.counter).toBe(12);
  });

  it('should increment and decrement by 1', () => {

    const buttons = compiled.querySelectorAll('button');

    buttons[0].click();
    expect( component.counter ).toBe(11);
    
    buttons[1].click();
    buttons[1].click();
    expect( component.counter ).toBe(9);
  });


  it('should update tag h1', () => {

    component.increaseBy(10);
    fixture.detectChanges();

    const h1 = compiled.querySelector('h1');
    expect( h1?.textContent ).toContain('20');

  });


});
