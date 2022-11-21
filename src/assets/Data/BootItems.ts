import { books } from '../../app/home/dataservice/dataservice';
export function bookdata(): Array<books> {
  return [
    {
      id: 1,
      bookname: 'Think and grow rich',
      bookanuthor: 'Napoleon Hill',

      bookprice: '200',
      bookdesc:
        'Think and Grow Rich by Napoleon Hill examines the psychological power of thought and the brain in the process of furthering your career for both monetary and personal satisfaction',
    },
  ];
}
