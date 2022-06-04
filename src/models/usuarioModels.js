const {Schema, model} = require("mongoose");

const usuarioSchema = Schema({
  nombreCompleto: {
    type: String,
    required: true,
  },
  primerApellido:{
    type: String,
    required: true,
  },
  cantidadRepeticiones: {
    type: Number,
    requiered: true,
  },
},
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model('Rank', usuarioSchema);