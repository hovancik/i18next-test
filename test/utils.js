const chai = require('chai')
const Utils = require('../app/utils/utils')
const i18next = require('i18next')
const Backend = require('i18next-node-fs-backend')

chai.should()

describe('Utils', function () {
  beforeEach(function (done) {
    i18next
      .use(Backend)
      .init({
        lng: 'en',
        fallbackLng: 'en',
        debug: false,
        backend: {
          loadPath: `${__dirname}/../app/locales/{{lng}}.json`,
          jsonIndent: 2
        }
      }, function (err, t) {
        i18next.changeLanguage('en')
        if (err) {
          console.log(err.stack)
        }
        done()
      })
  })

  it('formats remaining seconds into correct format', function () {
    Utils.formatRemaining(10).should.equal('11 seconds left')
    Utils.formatRemaining(60).should.equal('2 minutes left')
    Utils.formatRemaining(61).should.equal('2 minutes left')
    Utils.formatRemaining(150).should.equal('3 minutes left')
  })
})
