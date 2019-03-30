'use strict';

module.exports = function(Trlocacion) {
  Trlocacion.traerLocacion = function (idPersona, cb) {
    Trlocacion.findOne({ where: {idPersona: idPersona}} , function(err, trlocacion) {
      if (err) {
        return cb(err);
      } else {
        return cb(null, trlocacion);
      }
    });
  };

  Trlocacion.remoteMethod('traerLocacion', {
      http: {verb: 'get', path: '/:idPersona/locacion'},
      accepts:[
          {arg: 'idPersona', type: 'string', http:{source: 'path'}, required: true}
      ],
      returns: {arg: 'locacion', type: 'object'}
  })
};
