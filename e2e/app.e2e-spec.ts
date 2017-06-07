import { WspagePage } from './app.po';

describe('wspage App', () => {
  let page: WspagePage;

  beforeEach(() => {
    page = new WspagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
