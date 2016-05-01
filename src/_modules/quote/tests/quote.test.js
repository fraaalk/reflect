'use strict';

import Quote from '../quote';

describe('Quote View', function() {

  beforeEach(() => {
    this.quote = new Quote();
  });

  it('Should run a few assertions', () => {
    expect(this.quote).toBeDefined();
  });

});
