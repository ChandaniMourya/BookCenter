import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

class mockservice {
  userReg() {}
}
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let httpClientModule: HttpClientTestingModule;
  let httpTestingController: HttpTestingController;
  let debugelement: DebugElement;
  let htmlelement: HTMLElement;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    debugelement = fixture.debugElement.query(By.css('form'));
    htmlelement = debugelement.nativeElement;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('registerForm first form value sholud be blank', () => {
    // let blankinput = component.registerForm.value;
    expect(component.registerForm.value.name).toBe('');
    expect(component.registerForm.value.email).toBe('');
    expect(component.registerForm.value.password).toBe('');
  });

  it('check button is clicked ', fakeAsync(() => {
    spyOn(component, 'registerSubmitted');

    let clickbutton =
      fixture.debugElement.nativeElement.querySelector('#registerbutton');
    clickbutton.click();
    console.log(clickbutton);
    tick();
    expect(component.registerSubmitted).toHaveBeenCalledTimes(1);
  }));
});
