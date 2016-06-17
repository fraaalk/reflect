'use strict';

import Webinar from '../webinar';

describe('Webinar View', function() {

  beforeEach(() => {
    this.webinar = new Webinar();
  });

  it('Should run a few assertions', () => {
    expect(this.webinar).toBeDefined();
  });

});
