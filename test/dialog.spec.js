import 'jsdom-global/register';
import { expect, use } from 'chai';
import dirtyChai from 'dirty-chai';

use(dirtyChai);

describe('mocha tests', () => {
  it('has document', () => {
    var div = document.createElement('div')
    expect(div.nodeName).eql('DIV')
  });
});
