import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { LoginComponent } from './login.component';
class ApiServiceMock {
  loginUser(test) {
    return of({
      email: 'abc@gmail.com',
      password: 'abcabcacba',
    });
  }
}

let mockserviceObj = new ApiServiceMock();
// let MockRouterobj = new MockRouter();
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    console.log('Before ech');
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [
        {
          provide: ApiService,
          useValue: mockserviceObj,
        },
        // { provide: Router, useValue: MockRouterobj },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    // console.log('fixture', fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router); // TestBed.inject(Router) for Angular 9+
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('email and password null', () => {
    expect(component.loginForm.controls['email'].value).toBe('');
    expect(component.loginForm.controls['password'].value).toBe('');
  });
  it('logindetailSubmitted ', () => {
    const spy = spyOn(mockserviceObj, 'loginUser').and.returnValue(
      of({
        email: 'abc@gmail.com',
        password: 'abcabcacba',
      })
    );
    const navigateSpy = spyOn(router, 'navigate'); // let loginroutespy = spyOn(routerSpy, 'navigate');
    component.logindetailSubmitted();
    expect(spy).toHaveBeenCalled();

    expect(navigateSpy).toHaveBeenCalledWith(['/home']);
  });
});
