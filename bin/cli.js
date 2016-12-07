#!/usr/bin/env node
'use strict'

const cli = require('../src')
const pkg = require('../package.json')
const argv = process.argv.slice(2)

if (argv.indexOf('--version') !== -1 || argv.indexOf('-v') !== -1) {
  console.log(pkg.version)
  process.exit(1)
}

if (argv.indexOf('--help') !== -1 || argv.indexOf('-h') !== -1) {
  console.log(`
$ cname --help

  Usage:

    $ cname <directory> [<options>]

  Options:

    -h, --help              Display help information
    -v, --version           Output version

  Examples:

    $ cname dist
`)
  process.exit(1)
}

cli.create(argv)
