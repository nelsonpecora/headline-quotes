# headline-quotes

[![Greenkeeper badge](https://badges.greenkeeper.io/nelsonpecora/headline-quotes.svg)](https://greenkeeper.io/)

[![Circle CI](https://circleci.com/gh/yoshokatana/headline-quotes.svg?style=svg)](https://circleci.com/gh/yoshokatana/headline-quotes)

🗒 Smart quotes for headlines! Follows the AP Style Guide

Per the AP Style Guide, headline quotes work differently than normal English. Where US and UK English specify using double quotes (with single quotes for inner quotations), AP suggests that headlines _always_ use single quotes. This convention is followed by most publications, including [The Guardian](http://www.theguardian.com/guardian-observer-style-guide-q) and [Reuters](http://handbook.reuters.com/?title=Q).

Most smart quote libraries follow the rules for body text and thus will assume single quotes in headlines are likely to be apostrophes. This library aims to solve the smart quote issue for _this specific use case_.

### What's Covered

* prepended apostrophes (e.g. `'tis` and `the '60s`)
* apostrophes inside words (e.g. `I'll` or `the dog's bone`)
* special cases (e.g. `In 'n' Out`)
* quotes (double quotes get converted to single quotes)
* plural posessives (e.g. `the lawyers' cars`)
* appended apostrophes (e.g. `Ol' Mizzou`)
* quotes _around_ apostrophes are handled correctly (e.g. `"'60s era childrens' toys"`)
* quotes _interspersed_ with apostrophes are handled correctly (e.g. `"'60s era" childrens' toys`)

### What Isn't Covered

* quotes inside quotes (e.g. `"Someone said, 'Something else'"`)
* unclosed quotes (e.g. multi-paragraph quotes, which in English may have unclosed quotation marks)
* certain prepended apostrophes (e.g. `'cause I said so`)
* certain appended apostrophes (I'm only catching `o'`, `ol'`, and `s'`)
* other special cases besides `'n'`
* grammatical rules that aren't US/Canadian English (e.g. UK rules, other languages' quotation marks)
* [Hawaiian ʻOkina](https://www.wikiwand.com/en/%CA%BBOkina) and similar glottal stops
* [foot and inch marks](http://practicaltypography.com/foot-and-inch-marks.html)

## Install

```
npm install --save headline-quotes
```

## Usage

This library exports both [es2015-style modules](http://www.2ality.com/2014/09/es6-modules-final.html) and regular old commonjs modules, so you can use browserify, rollup, or webpack to include it client-side.

```
import quote from 'headline-quotes';

quote('"Make Me Smart"'); // ‘Make Me Smart’
```

```
var quote = require('headline-quotes');

quote('"Make Me Smart"'); // ‘Make Me Smart’
```

## Contributing

English is a mishmash of conflicting grammatical rules, so I've probably missed something! Create a pull request with a failing unit test, and I'll gladly help fix it.
