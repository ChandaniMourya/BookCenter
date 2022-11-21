import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Method } from 'ionicons/dist/types/stencil-public-runtime';

// let testingurl = '/addBook';
interface data {
  id: number;
  bookname: string;
  bookauthor: string;
  bookprice: string;
  bookdesc: string;
}
let req_url: string;
let testdata: {};
let editvalue: {};
describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    req_url = 'http://localhost:8050/';
    testdata = {
      id: 45,
      bookname: 'bac',
      bookauthor: 'chandani',
      bookprice: '200',
      bookdesc: 'abcabcabc',
    };
    editvalue = {
      id: 45,
      bookname: 'abc',
      bookauthor: 'chandani',
      bookprice: '300',
      bookdesc: 'abc abc babc abs sjs sjbsqw',
    };
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      // providers:[ApiService]
    });
    service = TestBed.inject(ApiService);
    // httpmock = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('add book api', () => {
    let inputdata = {
      bookname: 'bac',
      bookauthor: 'chandani',
      bookprice: '200',
      bookdesc: 'abcabcabc',
    };
    service.addBook(inputdata).subscribe((data) => {
      expect(data).toEqual(testdata);
    });
    let request = httpTestingController.expectOne(`${req_url}addBook`);
    expect(request.request.method).toBe('POST');
    request.flush(testdata);
  });
  it('get all book from database', () => {
    expect(service.getAllBooks()).toBeTruthy();
  });

  it('delete book api ', () => {
    let id: number;
    id = 45;

    service.deleteBook(id).subscribe((data) => {
      expect(data).toEqual(testdata);
    });
    const req = httpTestingController.expectOne({
      method: 'Delete',
      url: `${req_url}deleteBook/${id}`,
    });

    req.flush(testdata);
  });

  // editBook
  it('editBook is called', () => {
    service.editBook(editvalue).subscribe((data) => {
      expect(data).toEqual(editvalue);
    });
    const editBook = httpTestingController.expectOne({
      method: 'PUT',
      url: `${req_url}updateBook`,
    });
    editBook.flush(editvalue);
  });
});
// mock when you add data and spy when you track the data  bheviours
