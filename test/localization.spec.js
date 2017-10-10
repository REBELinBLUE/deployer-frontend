import { expect, use } from 'chai';
import dirtyChai from 'dirty-chai';

import * as localize from '../src/localization';

use(dirtyChai);

describe('Localization', () => {
  beforeEach(() => {
    localize.addMessages({
      en: {
        'app.foo': 'bar',
        'app.bar': 'foo',
        'foo.bar': 'a :message with a :replacement',
      },
    });

    localize.setLocale('en');
  });

  it('Throws an error when using an unknown locale', () => {
    expect(() => {
      localize.setLocale('de');
    }).to.throw(Error);
  });

  it('Returns the current locale', () => {
    expect(localize.getLocale()).to.be.equal('en');
  });

  it('Returns the translation for a key', () => {
    expect(localize.get('app.foo')).to.be.equal('bar');
  });

  it('Returns all translations in a section', () => {
    expect(localize.get('app')).to.be.deep.equal({ foo: 'bar', bar: 'foo' });
  });

  it('Replaces tokens in the translation', () => {
    expect(localize.get('foo.bar', { message: 'foo', replacement: 'bar' })).to.be.equal('a foo with a bar');
  });

  it('Returns true when the key has a translation', () => {
    expect(localize.has('app.foo')).to.be.true();
  });

  it('Returns false when the key does not have a translation', () => {
    expect(localize.has('lorem.ipsum')).to.be.false();
  });

  it('Adds new messages to the translations', () => {
    localize.addMessages({
      en: {
        'foo.baz': 'new value',
      },
      de: {
        'bar.foo': 'another value',
      },
    });

    expect(localize.has('foo.baz')).to.be.true();
    expect(localize.has('bar.foo')).to.be.false();

    localize.setLocale('de');

    expect(localize.has('foo.baz')).to.be.false();
    expect(localize.has('bar.foo')).to.be.true();
  });

  it('Overwrites previous translations with newer ones', () => {
    localize.addMessages({
      en: {
        'foo.bar': 'new value',
      },
    });

    expect(localize.get('foo.bar')).to.be.equal('new value');
  });
});
