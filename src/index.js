'use strict'

const fs = require('fs')
const url = require('url')

function create (argv) {
  const pkg = require(`${process.cwd()}/package.json`)
  const directory = argv[0]

  if (!pkg.homepage) {
    console.log(`Homepage not found!`)
    process.exit(1)
  }

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory)
  }

  const homepage = url.parse(pkg.homepage).host
  const file = `${directory}/CNAME`

  fs.writeFileSync(file, homepage)
}

exports.create = create
