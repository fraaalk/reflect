'use strict';

import Deck from '../deck';

describe('Deck View', function() {

  beforeEach(() => {
    this.deck = new Deck();
  });

  it('Should run a few assertions', () => {
    expect(this.deck).toBeDefined();
  });

});
