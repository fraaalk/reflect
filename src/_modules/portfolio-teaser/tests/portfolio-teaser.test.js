'use strict';

import PortfolioTeaser from '../portfolio-teaser';

describe('PortfolioTeaser View', function() {

  beforeEach(() => {
    this.portfolioTeaser = new PortfolioTeaser();
  });

  it('Should run a few assertions', () => {
    expect(this.portfolioTeaser).toBeDefined();
  });

});
