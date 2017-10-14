import dialog from './dialog.spec';
import formatters from './formatters.spec';
import localization from './localization.spec';
import currentProject from './projectId.spec';

describe('Utils', () => {
  currentProject();
  dialog();
  formatters();
  localization();
});
