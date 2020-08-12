const {send} = require('micro')

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  send(res, 200, {sites: [{
    regex: '^https:\\/\\/ja.wikipedia.org',
    version: 'v1'
  }, {
    regex: '^https:\\/\\/en.wikipedia.org',
    version: 'v2'
  }]})
}
