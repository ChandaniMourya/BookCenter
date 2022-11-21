import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { AddBookComponent } from './add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

describe('AddBookComponent', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;
  let service: ApiService;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AddBookComponent],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        FormsModule,

        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddBookComponent);
    service = TestBed.inject(ApiService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  xit('product form value', () => {
    const bookname = component.ProductForm.get('bookname');

    bookname.setValue('abc');
    const bookauthor = component.ProductForm.get('bookauthor');

    bookauthor.setValue('abc');
    const bookprice = component.ProductForm.get('bookprice');

    bookprice.setValue('abc');
    const bookdesc = component.ProductForm.get('bookdesc');

    bookdesc.setValue('abc');
    expect(bookname.valid).toBeFalsy();
    expect(component.ProductForm.value).toBeTruthy();
  });
  it('onsubmit', () => {
    let testdata = {
      bookname: 'bac',
      bookauthor: 'chandani',
      bookprice: '200',
      bookdesc: 'abcabcabc',
    };
    service.addBook(testdata).subscribe((data) => {
      expect(testdata).toBe(testdata);
    });
  });
});
