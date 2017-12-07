const i18next = require('i18next')

let formatRemaining = function (seconds) {
  if (seconds < 60) {
    return i18next.t('utils.secondsLeft', {count: seconds + 1})
  } else {
    return i18next.t('utils.minutesLeft', {count: Math.trunc((seconds / 60) + 1)})
  }
}

module.exports.formatRemaining = formatRemaining
