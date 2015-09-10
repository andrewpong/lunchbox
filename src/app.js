var incidentModule = {};

incidentModule.initIncidentForm = function(guid, id) {
  var _this = this;
  _this[guid] = {
    id: id,
  };
  return _this;
};

console.log(incidentModule.initIncidentForm('833ab4e4e7754127b44c33f90133734d', 19208));

console.log(incidentModule['12']);

incidentModule.initIncidentForm('s', 19208);
window.im = incidentModule;
