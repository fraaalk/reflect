'use strict';

import Blog from '../blog';

describe('Blog View', function() {

  beforeEach(() => {
    this.blog = new Blog();
  });

  it('Should run a few assertions', () => {
    expect(this.blog).toBeDefined();
  });

});
