'use strict';

import Breadcrumb from '../breadcrumb';

describe('Breadcrumb View', function() {

  beforeEach(() => {
    this.breadcrumb = new Breadcrumb();
  });

  it('Should run a few assertions', () => {
    expect(this.breadcrumb).toBeDefined();
  });

});
