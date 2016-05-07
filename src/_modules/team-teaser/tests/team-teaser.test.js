'use strict';

import TeamTeaser from '../team-teaser';

describe('TeamTeaser View', function() {

  beforeEach(() => {
    this.teamTeaser = new TeamTeaser();
  });

  it('Should run a few assertions', () => {
    expect(this.teamTeaser).toBeDefined();
  });

});
