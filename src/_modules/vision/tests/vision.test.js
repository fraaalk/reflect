'use strict';

import Vision from '../vision';

describe('Vision View', function() {

  beforeEach(() => {
    this.vision = new Vision();
  });

  it('Should run a few assertions', () => {
    expect(this.vision).toBeDefined();
  });

});
