# CNAME

> Create a CNAME file from package data.

[![Travis Status](https://travis-ci.org/cjpatoilo/cname.svg?branch=master)](https://travis-ci.org/cjpatoilo/cname?branch=master)
[![AppVeyor Status](https://ci.appveyor.com/api/projects/status/bl59wj551tbofupk?svg=true)](https://ci.appveyor.com/project/cjpatoilo/cname)
[![Codacy Status](https://img.shields.io/codacy/grade/04510cf9543142e2bcf340fa84e33371/master.svg)](https://www.codacy.com/app/cjpatoilo/cname/dashboard)
[![Coverage Status](https://coveralls.io/repos/github/cjpatoilo/cname/badge.svg?branch=master)](https://coveralls.io/github/cjpatoilo/cname?branch=master)
[![Dependencies Status](https://david-dm.org/cjpatoilo/cname.svg)](https://travis-ci.org/cjpatoilo/cname?branch=master)
[![Version Status](https://badge.fury.io/js/cname.svg)](https://www.npmjs.com/package/cname)
[![Download Status](https://img.shields.io/npm/dt/cname.svg)](https://www.npmjs.com/package/cname)
[![Gitter Chat](https://img.shields.io/badge/gitter-join_the_chat-4cc61e.svg)](https://gitter.im/cjpatoilo/cname)


## Why it's awesome?

Install this package npm with --global or with -D to add the package as a dependency in the package.json file of your project. This library reads the package.json files to get the homepage property value, then creates the CNAME file with that value.

**Example**

```json
// package.json
{
	"name": "milligram",
	"version": "1.0.0",
	"homepage": "https://milligram.github.io",
	...
}
```

```md
// CNAME
milligram.github.io
```


## Install

**Install with npm**

```sh
$ npm install cname --global
```

**Install with Yarn**

```sh
$ yarn install cname --global
```


## Usage

```
$ cname --help

  Usage:

    $ cname <directory> [<options>]

  Options:

    -h, --help              Display help information
    -v, --version           Output version

  Examples:

    $ cname dist

```


## Contributing

Want to contribute? Follow these [recommendations](https://github.com/cjpatoilo/cname/blob/master/.github/contributing.md).


## License

Designed with ♥ by [CJ Patoilo](http://cjpatoilo.com). Licensed under the [MIT License](http://cjpatoilo.mit-license.org).
