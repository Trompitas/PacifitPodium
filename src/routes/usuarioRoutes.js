const express = require("express");
const usuarioSchema = require("../models/usuarioModels");

const router = express.Router();

// create user
router.post("/podium", (req, res) => {
  const usuario = usuarioSchema(req.body);

  usuario
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/podium", (req, res) => {
  usuarioSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// search user by name
router.get("/podium/:name", (req, res) => {
  const { nombreCompleto } = req.params;
  const search = new RegExp(nombreCompleto, "i");
  usuarioSchema
    .find({$or: [{nombreCompleto: search}],}).lean()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/podium/:id", (req, res) => {
  const { id } = req.params;
  usuarioSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/podium/:id", (req, res) => {
  const { id } = req.params;
  const { nombreUsuario, nombreCompleto, primerApellido, contrasena } = req.body;
  usuarioSchema
    .updateOne(
      { _id: id },
      { $set: { nombreCompleto, cantidadRepeticiones } }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;