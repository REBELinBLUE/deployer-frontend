import 'jsdom-global/register';
import { expect, use } from 'chai';
import dirtyChai from 'dirty-chai';

use(dirtyChai);

export default () => {
  describe('Dialog', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <div class="modal fade" id="group">
  
        </div>
      `;
    });

    it('has document', () => {
      const button = document.querySelector('.modal');
      expect(button.nodeName).to.be.equal('DIV');
    });
  });
};
