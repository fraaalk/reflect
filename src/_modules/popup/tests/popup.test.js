'use strict';

import Popup from '../popup';

describe('Popup View', function() {

  beforeEach(() => {
    this.popup = new Popup();
  });

  it('Should run a few assertions', () => {
    expect(this.popup).toBeDefined();
  });

});
