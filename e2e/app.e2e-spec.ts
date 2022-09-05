import { PassaroUrbanoAppPage } from './app.po';

describe('passaro-urbano-app App', () => {
  let page: PassaroUrbanoAppPage;

  beforeEach(() => {
    page = new PassaroUrbanoAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
