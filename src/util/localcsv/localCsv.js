const fpts = require('./fpts')
const iots = require('./iots')

const quote = str => '"' + str + '"'

const TODO = '<p><strong>TODO</strong></p>'

const Category = {
  languagesAndFrameworks: 'Languages & Frameworks',
  validation: 'Validation',
  testing: 'Testing',
  serverless: 'Serverless',
  iac: 'Infrastructure as Code'
}

const Ring = {
  trial: 'Trial',
  recommended: 'Recommended',
  inUse: 'In Use',
  deprecated: 'Deprecated'
}

const Quadrant = {
  backend: 'Backend',
  frontend: 'Frontend',
  infrastructure: 'Infrastructure',
  cloud: 'Cloud Services'
}

const row = (name, ring, quadrant, isNew, description, category) =>
  name + ',' + ring + ',' + quadrant + ',' + isNew.toString() + ',' + quote(description) + ',' + category + '\n'

// TODO: Replace with easier to use solution (include some appropriate parsing) - or GET from spreadsheet URL after all? (Having it in the repo would allow for more control over changes though...)
// TODO (Reminder): Take care of ring ordering, the order of the respective first occurrence should always be "Experimental", "Recommended", "In Use", "Deprecated"
const localCsv = 'name,ring,quadrant,isNew,description,category\n' +
  row('fp-ts', Ring.trial, Quadrant.backend, true, fpts.fptsDescription, Category.languagesAndFrameworks) +
  row('io-ts', Ring.recommended, Quadrant.backend, false, iots.iotsDescription, Category.validation) +
  row('Class-Validator/Class-Transformer', Ring.recommended, Quadrant.backend, false, TODO, Category.validation) +
  row('Typescript', Ring.recommended, Quadrant.backend, false, TODO, Category.languagesAndFrameworks) +
  row('Terraform', Ring.recommended, Quadrant.infrastructure, false, TODO, Category.iac) +
  row('Mocha', Ring.inUse, Quadrant.backend, false, TODO, Category.testing) +
  row('Sinon', Ring.inUse, Quadrant.backend, false, TODO, Category.testing) +
  row('Chai', Ring.inUse, Quadrant.backend, false, TODO, Category.testing) +
  row('Enzyme', Ring.deprecated, Quadrant.frontend, false, TODO, Category.testing) +
  row('Firebase functions', Ring.deprecated, Quadrant.cloud, false, TODO, Category.serverless)

exports.localCsv = localCsv
