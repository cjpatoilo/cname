<a href="https://github.com/cjpatoilo/cname"><img width="100%" src="https://cjpatoilo.com/cname/artwork.png" alt="CNAME - Create a CNAME file from package data."></a>

> Create a CNAME file from package data.

[![Travis Status](https://travis-ci.org/cjpatoilo/cname.svg?branch=master)](https://travis-ci.org/cjpatoilo/cname?branch=master)
[![AppVeyor Status](https://ci.appveyor.com/api/projects/status/bl59wj551tbofupk?svg=true)](https://ci.appveyor.com/project/cjpatoilo/cname)
[![Codacy Status](https://img.shields.io/codacy/grade/04510cf9543142e2bcf340fa84e33371/master.svg)](https://www.codacy.com/app/cjpatoilo/cname/dashboard)
[![Coverage Status](https://coveralls.io/repos/github/cjpatoilo/cname/badge.svg?branch=master)](https://coveralls.io/github/cjpatoilo/cname?branch=master)
[![Dependencies Status](https://david-dm.org/cjpatoilo/cname.svg)](https://travis-ci.org/cjpatoilo/cname?branch=master)
[![Version Status](https://badge.fury.io/js/cname.svg)](https://www.npmjs.com/package/cname)
[![Download Status](https://img.shields.io/npm/dt/cname.svg)](https://www.npmjs.com/package/cname)
[![Gitter Chat](https://img.shields.io/badge/gitter-join_the_chat-4cc61e.svg)](https://gitter.im/cjpatoilo/cname)


## Why it's awesome

Install this package npm with `--global` or with `-D` to add the package as a dependency in the `package.json` file of your project. This library reads the `package.json` files to get the homepage property value, then creates the `CNAME` file with that value.


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


## Example

From package data..

```json
// package.json
{
	"name": "milligram",
	"version": "1.0.0",
	"description": "A minimalist CSS framework.",
	"homepage": "https://milligram.io",
	"repository": "milligram/milligram",
	"license": "MIT",
	"author": "CJ Patoilo <cjpatoilo@gmail.com>",
	"main": "dist/milligram.css"
}
```

..to create CNAME file.

```md
// CNAME
milligram.github.io
```


## Contributing

Want to contribute? Follow these [recommendations](https://github.com/cjpatoilo/cname#contributing).


## License

Designed with ♥ by [CJ Patoilo](https://twitter.com/cjpatoilo). Licensed under the [MIT License](https://github.com/cjpatoilo/cname#license).
