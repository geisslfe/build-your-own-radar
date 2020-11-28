const fpts = require('./fpts')
const iots = require('./iots')

const quote = str => '"' + str + '"'

const TODO = '<p><strong>TODO</strong></p>'

// TODO: Replace with easier to use solution (include some appropriate parsing) - or GET from spreadsheet URL after all? (Having it in the repo would allow for more control over changes though...)
// TODO: Take care of ring ordering, the order of the respective first occurrence should always be "Experimental", "Recommended", "In Use", "Deprecated"
const localCsv = 'name,ring,quadrant,isNew,description\n' +
  'fp-ts,Experimental,Backend,TRUE,' + quote(fpts.fptsDescription) + '\n' +
  'io-ts,Recommended,Backend,FALSE,' + quote(iots.iotsDescription) + '\n' +
  'terraform,Recommended,Cloud Services/Infrastructure,FALSE,' + TODO + '\n' +
  'Sinon,In Use,Testing,FALSE,' + TODO + '\n' +
  'Enzyme,Deprecated,Frontend,FALSE,' + TODO + '\n'

exports.localCsv = localCsv
