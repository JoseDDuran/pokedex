const _ = require('lodash');
const { handleError } = require('../utils/helpers/expressHelper');
const data = require('../utils/constants/surveys');

const { surveys, survey2, survey3 } = data;

function getSurveys(req, res) {
  const { deviceSn } = req.query;
  try {
    if (deviceSn === 'sn-238967') {
      return res.json(survey3);
    }

    return res.json(survey2);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

module.exports = {
  getSurveys,
};
