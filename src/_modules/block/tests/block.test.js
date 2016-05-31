'use strict';

import Block from '../block';

describe('Block View', function() {

  beforeEach(() => {
    this.block = new Block();
  });

  it('Should run a few assertions', () => {
    expect(this.block).toBeDefined();
  });

});
