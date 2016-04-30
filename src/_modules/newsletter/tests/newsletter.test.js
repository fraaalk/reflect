'use strict';

import Newsletter from '../newsletter';

describe('Newsletter View', function() {

  beforeEach(() => {
    this.newsletter = new Newsletter();
  });

  it('Should run a few assertions', () => {
    expect(this.newsletter).toBeDefined();
  });

});
