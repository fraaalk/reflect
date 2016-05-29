'use strict';

import Customer from '../customer';

describe('Customer View', function() {

  beforeEach(() => {
    this.customer = new Customer();
  });

  it('Should run a few assertions', () => {
    expect(this.customer).toBeDefined();
  });

});
