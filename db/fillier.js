const Fillier = require("../models/Fillier");


exports.findFillier = critere => {
  return Fillier.findOne(critere);
};
