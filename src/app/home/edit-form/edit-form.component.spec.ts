import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, NavParams, ToastController } from '@ionic/angular';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { By } from '@angular/platform-browser';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditFormComponent } from './edit-form.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { books } from '../dataservice/dataservice';
import { ApiService } from 'src/app/service/api.service';
import { of } from 'rxjs';

class MockNavParam {
  public get(ed: string) {
    let edit = {
      id: 32,
      bookname: 'book 1',
      bookauthor: 'roman',
      bookprice: '200',
      bookdesc: 'abc bac bac',
    };
    return edit;
  }
}

class MockToastController {
  toastData = {
    message: 'A Book is updated',
    duration: 1500,
    color: 'primary',
  };
  create(toastData) {
    return toastData;
  }
}
class mockservice {
  editBook(test) {
    return of({
      id: 2,
      bookname: 'book 2',
      bookanuthor: 'book 2',
      bookprice: 'book 2',
      bookdesc: 'book 2',
    });
  }
}
// let mockserviceObj = { editBook: () => {} };
let mockserviceObj = new mockservice();
describe('EditFormComponent', () => {
  let component: EditFormComponent;
  let fixture: ComponentFixture<EditFormComponent>;
  let httpTestingController: HttpClientTestingModule;
  let debugelement: DebugElement;
  let htmlelement: HTMLElement;
  let mockvalue: books[];
  // let mockservice: any;
  let MockToastController: ToastController;
  // let MockFormBuilder: FormBuilder;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EditFormComponent],
      providers: [
        {
          provide: NavParams,
          useClass: MockNavParam,
        },
        {
          provide: ToastController,
          useClass: MockToastController,
        },
        {
          provide: ApiService,
          useValue: mockserviceObj,
        },
      ],
      imports: [
        IonicModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      // schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(EditFormComponent);
    component = fixture.componentInstance;
    debugelement = fixture.debugElement.query(By.css('form'));
    htmlelement = debugelement.nativeElement;
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
    mockvalue = [
      {
        id: 1,
        bookname: 'book 1',
        bookanuthor: 'book 1',
        bookprice: 'book 1',
        bookdesc: 'book 1',
      },
      {
        id: 2,
        bookname: 'book 2',
        bookanuthor: 'book 2',
        bookprice: 'book 2',
        bookdesc: 'book 2',
      },
      {
        id: 3,
        bookname: 'book 3',
        bookanuthor: 'book 3',
        bookprice: 'book 3',
        bookdesc: 'book 3',
      },
    ];
    // mockservice = jasmine.createSpyObj(['editBook']);
    // component = new EditFormComponent(
    //   mockservice,
    //   MockFormBuilder,
    //   MockNavParam,
    //   MockModalController,
    //   MockToastController
    // );
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check the form value is comming or not ', () => {
    expect(component.editedvalue.value).toEqual(component.editedvalue.value);
  });
  it('edit value sholud be comming inside the form or not', () => {
    let formvalue = component.editform.value;
    expect(formvalue.bookname).toBe(formvalue.bookname);
    expect(formvalue.bookanuthor).toBe(formvalue.bookanuthor);
    expect(formvalue.bookprice).toBe(formvalue.bookprice);
    expect(formvalue.bookdesc).toBe(formvalue.bookdesc);
  });
  it('update book alert function called or not', () => {
    let clickbutton =
      fixture.debugElement.nativeElement.querySelector('#bookupdate');
    clickbutton.click();

    fixture.detectChanges();
    spyOn(component, 'updatedBookAlert');
    component.updatedBookAlert();
    expect(component.updatedBookAlert).toHaveBeenCalledTimes(1);
  });
  it('onsumit', () => {
    const spy = spyOn(mockserviceObj, 'editBook').and.returnValue(
      of({
        id: 2,
        bookname: 'book 2',
        bookanuthor: 'book 2',
        bookprice: 'book 2',
        bookdesc: 'book 2',
      })
    );
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  });
});

// class MockModalController {
//   // cancel = 'cancel';
//   dismiss() {
//     return;
//   }
// }
// class MockFormBuilder {
//   group() {}
// }
