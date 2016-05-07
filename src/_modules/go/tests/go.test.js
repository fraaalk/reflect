'use strict';

import Go from '../go';

describe('Go View', function() {

  beforeEach(() => {
    this.go = new Go();
  });

  it('Should run a few assertions', () => {
    expect(this.go).toBeDefined();
  });

});
