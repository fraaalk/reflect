'use strict';

import Icon from '../icon';

describe('Icon View', function() {

  beforeEach(() => {
    this.icon = new Icon();
  });

  it('Should run a few assertions', () => {
    expect(this.icon).toBeDefined();
  });

});
