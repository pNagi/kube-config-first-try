#!/usr/bin/env node

const readDir = require('fs-readdir-recursive')
const jsYaml = require('js-yaml')
const fs = require('fs')
const files = readDir(__dirname + '/src')
const _ = require('lodash')

let success = true

const validate = (o, filename) => {
  const metadataName = _.get(o, 'metadata.name', '[ metadata.name not found ]')
  if (!filename.split('/').pop().startsWith(metadataName)) {
    console.error(`[FAIL] metadata.name (${metadataName}) should match filename (${filename})`)
    success = false
  }
}

files.map(filename => {
  const content = fs.readFileSync(`./src/${filename}`, 'utf8')
  let o
  if (filename.endsWith('.yml')) {
    content.split('---').forEach(c => validate(jsYaml.load(c), filename))
  }
  if (filename.endsWith('.json')) {
    o = JSON.parse(content)
    validate(o, filename)
  }
})

if (!success) {
  process.exit(1)
}
