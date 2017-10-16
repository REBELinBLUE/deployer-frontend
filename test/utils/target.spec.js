import jsdom from 'jsdom-global';
import { expect, use } from 'chai';
import dirtyChai from 'dirty-chai';

import { isCurrentProject, isCurrentTarget } from '../../src/utils/target';
import { setProjectId } from '../../src/utils/projectId';

use(dirtyChai);

export default () => {
  describe('Target', () => {
    it('isCurrentTarget returns false when passed in object is not for the current project', () => {
      expect(isCurrentTarget({ project_id: 10 })).to.be.false();

      setProjectId(12345);

      expect(isCurrentTarget({ project_id: 98766 })).to.be.false();
    });

    it('isCurrentTarget returns true when passed in object is for the current project', () => {
      const projectId = 65271;

      setProjectId(projectId);

      expect(isCurrentTarget({ project_id: projectId })).to.be.true();
    });
  });
};
