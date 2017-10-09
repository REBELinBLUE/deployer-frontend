import { expect, use } from 'chai';
import dirtyChai from 'dirty-chai';

import { dateTimeFormatter, logFormatter } from '../src/utils';

use(dirtyChai);

describe('Utils', () => {
  it('Formats a datetime into a long human readable format', () => {
    expect(dateTimeFormatter('2017-10-07 17:45:45')).to.be.equal('7th October 2017 5:45:45 PM');
  });

  it('Formats an output log', () => {
    const input = `
      <error>This is an error</error>
      <info>This is general info</info>
    `;

    const expected = `
      <span class="text-red">This is an error</span>
      <span class="text-default">This is general info</span>
    `;

    expect(logFormatter(input)).to.be.equal(expected);
  });
});

