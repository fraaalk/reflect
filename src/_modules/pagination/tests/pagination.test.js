'use strict';

import Pagination from '../pagination';

describe('Pagination View', function() {

  beforeEach(() => {
    this.pagination = new Pagination();
  });

  it('Should run a few assertions', () => {
    expect(this.pagination).toBeDefined();
  });

});
