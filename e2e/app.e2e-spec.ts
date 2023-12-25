import { FootballResultSimulatorV2Page } from './app.po';

describe('football-result-simulator-v2 App', function() {
  let page: FootballResultSimulatorV2Page;

  beforeEach(() => {
    page = new FootballResultSimulatorV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
