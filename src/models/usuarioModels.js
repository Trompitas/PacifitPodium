const {Schema, model} = require("mongoose");

const usuarioSchema = Schema({
  nombreCompleto: {
    type: String,
    required: true,
  },
  cantidadRepeticiones: {
    type: Number,
    requiered: true,
  },
  masculinofemenino: {
    type: String,
    required: true,
  },
},
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model('Rank', usuarioSchema);
