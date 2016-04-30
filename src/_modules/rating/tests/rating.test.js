'use strict';

import Rating from '../rating';

describe('Rating View', function() {

  beforeEach(() => {
    this.rating = new Rating();
  });

  it('Should run a few assertions', () => {
    expect(this.rating).toBeDefined();
  });

});
