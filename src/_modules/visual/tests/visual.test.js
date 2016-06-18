'use strict';

import Visual from '../visual';

describe('Visual View', function() {

  beforeEach(() => {
    this.visual = new Visual();
  });

  it('Should run a few assertions', () => {
    expect(this.visual).toBeDefined();
  });

});
