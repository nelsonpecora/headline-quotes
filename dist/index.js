'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (str) {
  str = prependWhitelist(str);
  str = prependDecades(str);
  str = inWord(str);
  str = specialCase(str);
  str = quote(str);
  str = appendWhitelist(str);
  str = appendPlurals(str);
  str = unmatchedQuotes(str);
  return str;
};

var a = '’',
    // apostrophe
l = '‘',
    // left single quote
r = '’'; // right single quote

/**
 * prepended apostrophes, a whitelist of words
 * @param {string} str
 * @returns {string}
 */
function prependWhitelist(str) {
  return str.replace(/'(tis|twas)/gi, a + '$1');
}

/**
 * prepended apostrophes for decades
 * @param {string} str
 * @returns {string}
 */
function prependDecades(str) {
  return str.replace(/'(\d0s)/gi, a + '$1');
}

/**
 * apostrophes in words, including posessives
 * @param {string} str
 * @returns {string}
 */
function inWord(str) {
  return str.replace(/(\S)'(\S)/gi, '$1' + a + '$2').replace(/(\S)'(\S)/gi, '$1' + a + '$2');
  // run through twice to catch complex contractions
  // like `hadn't've` (one letter separating apostrophes)
}

/**
 * special cases for apostrophes
 * @param {string} str
 * @returns {string}
 */
function specialCase(str) {
  return str.replace(/'(n)'/gi, a + '$1' + a); // matches 'n' and 'N'
}

/**
 * match paired groups of single or double quotes
 * note: converts double quotes to single quotes
 * @param {string} str
 * @returns {string}
 */
function quote(str) {
  // DON'T match if an ending single quote comes after `o`, `ol`, or `s`
  // because those might be apostrophes (they'll be rendered afterwards)

  // note: this only matches US-style quotes, so you need spaces before and after
  // (or the beginning / ending of the string)
  // (i.e. this won't match `"Punctuation outside the quote", like this`)

  // note: quotes that AREN'T plural posessives will not be caught by this,
  // so we run through unmatchedQuotes afterwards
  return str.replace(/(^|\s)(?:"(.*?)"|'(.*?[^(?:o|ol|s)])')(\s|$)/, '$1' + l + '$2$3' + r + '$4');
}

/**
 * appended apostrophes, a whitelist of words
 * @param {string} str
 * @returns {string}
 */
function appendWhitelist(str) {
  return str.replace(/(o|ol)'/gi, '$1' + a);
}

/**
 * appended apostrophes for plural posessives
 * @param {string} str
 * @returns {string}
 */
function appendPlurals(str) {
  return str.replace(/(s)'(\s|$)/gi, '$1' + a + '$2');
}

function unmatchedQuotes(str) {
  return str.replace(/(^|\s)['"](.*?)/gi, '$1' + l + '$2');
}