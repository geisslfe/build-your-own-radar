const fpts = require('./fpts')
const iots = require('./iots')

const quote = str => '"' + str + '"'

const TODO = '<p><strong>TODO</strong></p>'

// TODO: Replace with easier to use solution (include some appropriate parsing) - or GET from spreadsheet URL after all? (Having it in the repo would allow for more control over changes though...)
// TODO (Reminder): Take care of ring ordering, the order of the respective first occurrence should always be "Experimental", "Recommended", "In Use", "Deprecated"
const localCsv = 'name,ring,quadrant,isNew,description,category\n' +
  'fp-ts,Experimental,Backend,TRUE,' + quote(fpts.fptsDescription) + ',Languages&Frameworks\n' +
  'io-ts,Recommended,Backend,FALSE,' + quote(iots.iotsDescription) + ',Validation\n' +
  'Class-Validator/Class-Transformer,Recommended,Backend,FALSE,' + TODO + ',Validation\n' +
  'typescript,Recommended,Backend,FALSE,' + TODO + ',Languages&Frameworks\n' +
  'terraform,Recommended,Infrastructure,FALSE,' + TODO + ',Infrastructure as Code\n' +
  'Mocha,In Use,Backend,FALSE,' + TODO + ',Testing\n' +
  'Sinon,In Use,Backend,FALSE,' + TODO + ',Testing\n' +
  'Chai,In Use,Backend,FALSE,' + TODO + ',Testing\n' +
  'Enzyme,Deprecated,Frontend,FALSE,' + TODO + ',Testing\n' +
  'Firebase functions,Deprecated,Cloud Services,FALSE,' + TODO + ',Serverless\n'

exports.localCsv = localCsv
