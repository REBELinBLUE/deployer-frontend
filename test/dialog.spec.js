import 'jsdom-global/register';
import { expect, use } from 'chai';
import dirtyChai from 'dirty-chai';

use(dirtyChai);

describe('Dialog Helpers', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="modal fade" id="group">
        
      </div>
    `;
  });

  it('has document', () => {
    var button = document.querySelector('button.btn');

    console.log(button);
    expect(button.nodeName).eql('BUTTON');
  });
});
