import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LabelValueComponent } from './label-value.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LabelValueComponent', () => {
  let component: LabelValueComponent;
  let fixture: ComponentFixture<LabelValueComponent>;
  let labelDe: DebugElement;
  let labelEl: HTMLElement;
  let valueDe: DebugElement;
  let valueEl: HTMLElement;
  let containerDe: DebugElement;
  let containerEl: HTMLElement;
  const mockLabel = 'mock label';
  const mockValue = 'mock value';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelValueComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LabelValueComponent);
    component = fixture.componentInstance;
    labelDe = fixture.debugElement.query(By.css('b'));
    labelEl = labelDe.nativeElement;
    valueDe = fixture.debugElement.query(By.css('span'));
    valueEl = valueDe.nativeElement;
    containerDe = fixture.debugElement.query(By.css('div'));
    containerEl = containerDe.nativeElement;
    component.label = mockLabel;
    component.value = mockValue;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display label', () => {
    expect(labelEl.textContent).toContain(mockLabel);
  });

  it('should display label followed by value', () => {
    expect(containerEl.textContent).toContain(`${mockLabel}:${mockValue}`);
  });

  it('should display string value as a string', () => {
    expect(valueEl.textContent).toContain(mockValue);
  });

  it('should display boolean value of true as Yes', () => {
    component.value = true;
    fixture.detectChanges();

    expect(valueEl.textContent).toContain('Yes');
  });

  it('should display boolean value of false as No', () => {
    component.value = false;
    fixture.detectChanges();

    expect(valueEl.textContent).toContain('No');
  });
});
