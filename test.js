'use strict';
import {expect} from 'chai';
import quote from './src/index';

const a = '’', // apostrophe
  l = '‘', // left single quote
  r = '’'; // right single quote

describe('headline-quotes', function () {
  it('right single quotes and apostrophes are literally the same thing', function () {
    expect(a).to.equal(r);
  });

  it('renders prepended apostrophes in whitelisted words', function () {
    expect(quote('\'tis')).to.equal(`${a}tis`);
    expect(quote('\'Tis')).to.equal(`${a}Tis`);
    expect(quote('\'twas')).to.equal(`${a}twas`);
  });

  it('renders prepended apostrophes in decades', function () {
    expect(quote('\'50s')).to.equal(`${a}50s`);
    expect(quote('\'60s, \'70s, and \'80s')).to.equal(`${a}60s, ${a}70s, and ${a}80s`);
  });

  it('doesn\'t render prepended apostrophes in full years', function () {
    expect(quote('\'1928 was a good year\'')).to.not.include(`${a}1928`);
    expect(quote('the 1980s')).to.not.include(`${a}1980s`);
  });

  it('doesn\'t render prepended apostrophes in all two-digit pairs', function () {
    expect(quote('\'60 seconds\'')).to.not.include(`${a}60`);
  });

  it('renders in-word apostrophes', function () {
    expect(quote('isn\'t')).to.equal(`isn${a}t`);
    // test complex contractions with multiple apostrophes one-letter away from each other
    expect(quote('hadn\'t\'ve')).to.equal(`hadn${a}t${a}ve`);
    expect(quote('Sam\'s')).to.equal(`Sam${a}s`);
    expect(quote('five o\'clock')).to.equal(`five o${a}clock`);
    expect(quote('\'tisn\'t')).to.equal(`${a}tisn${a}t`);
  });

  it('renders apostrophes for special cases', function () {
    expect(quote('\'n\'')).to.equal(`${a}n${a}`);
    expect(quote(' \'n\' ')).to.equal(` ${a}n${a} `);
    expect(quote('\'N\'')).to.equal(`${a}N${a}`);
  });

  it('renders single quotes in headlines', function () {
    expect(quote('\'Hello World\' Reports New AI')).to.equal(`${l}Hello World${r} Reports New AI`);
    expect(quote('Hackers Program Terrifying Message Into Highway Sign: \'Poop\'')).to.equal(`Hackers Program Terrifying Message Into Highway Sign: ${l}Poop${r}`)
  });

  it('renders double quotes in headlines', function () {
    expect(quote('"Hello World" Reports New AI')).to.equal(`${l}Hello World${r} Reports New AI`);
  });

  it('renders quotes around apostrophes', function () {
    expect(quote('\'\'80s lawyers\'\' New Power Suits Pop!')).to.equal(`${l}${a}80s lawyers${a}${r} New Power Suits Pop!`);
    expect(quote('\'\'60s era tv\'')).to.equal(`${l}${a}60s era tv${r}`);
  });

  it('renders quotes around plural posessives', function () {
    expect(quote('the \'childrens\' camp\'')).to.equal(`the ${l}childrens${a} camp${r}`);
    expect(quote('the \'smart\' childrens\' camp')).to.equal(`the ${l}smart${r} childrens${a} camp`);
  });

  it('renders appended apostrophes in whitelisted words', function () {
    expect(quote('Ol\' Mizzou')).to.equal(`Ol${a} Mizzou`);
    expect(quote('ol\' fashioned')).to.equal(`ol${a} fashioned`);
    expect(quote('five o\' clock')).to.equal(`five o${a} clock`);
  });

  it('renders appended apostrophes in plural posessives', function () {
    expect(quote('for goodness\' sake')).to.equal(`for goodness${a} sake`);
  });

  it('renders unmatched single quotes', function () {
    // because we want to match plural posessives (`s'`) and other words that END in apostrophes,
    // sometimes the quote renderer won't pick up on quote pairs.
    // AFTER we look for plural posessives we do another quick run-through to catch
    // any unmatched quotes and attempt to smarten them
    expect(quote('the \'toys\'')).to.equal(`the ${l}toys${r}`);
  });

  it('renders unmatched double quotes', function () {
    expect(quote('the "toys"')).to.equal(`the ${l}toys${r}`);
  });
});
