import { DatePlaygroundPage } from './app.po';

describe('date-playground App', () => {
  let page: DatePlaygroundPage;

  beforeEach(() => {
    page = new DatePlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
