'use strict';

import BlogTeaser from '../blog-teaser';

describe('BlogTeaser View', function() {

  beforeEach(() => {
    this.blogTeaser = new BlogTeaser();
  });

  it('Should run a few assertions', () => {
    expect(this.blogTeaser).toBeDefined();
  });

});
