const { expect, use } = require('chai');
const dirtyChai = require('dirty-chai');

use(dirtyChai);

describe('Groups', () => {
  it('Does something', () => {
    expect(true).to.be.true();
  });
});
