# headline-quotes

[![Circle CI](https://circleci.com/gh/yoshokatana/headline-quotes.svg?style=svg)](https://circleci.com/gh/yoshokatana/headline-quotes)

🗒 Smart quotes for headlines! Follows the AP Style Guide

Per the AP Style Guide, headline quotes work differently than normal English. Where US and UK English specify using double quotes (with single quotes for inner quotations), AP suggests that headlines _always_ use single quotes. This convention is followed by most publications, including [The Guardian](http://www.theguardian.com/guardian-observer-style-guide-q) and [Reuters](http://handbook.reuters.com/?title=Q).

Most smart quote libraries follow the rules for body text and thus will assume single quotes in headlines are likely to be apostrophes. This library aims to solve the smart quote issue for _this specific use case_.

## Install

```
npm install --save headline-quotes
```

## Usage

This library exports both [es2015-style modules](http://www.2ality.com/2014/09/es6-modules-final.html) and regular old commonjs modules, so you can use browserify, rollup, or webpack to include it client-side.

## Contributing

English is a mishmash of conflicting grammatical rules, so I've probably missed something! Create a pull request with a failing unit test, and I'll gladly help fix it.
