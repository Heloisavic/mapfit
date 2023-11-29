const express = require('express');
const app = express();
const personalRoutes = express.Router();
const bcrypt = require('bcryptjs');
const SALT_ROUNDS = 10;
let personal = require('../model/personal');

// api to add personal
personalRoutes.route('/add').post(async function (req, res) {
  try {
    const novopersonal = new personal(req.body);
    const hashedPassword = await bcrypt.hash(req.body.senha, SALT_ROUNDS);
    novopersonal.senha = hashedPassword;
    await novopersonal.save();
    await novopersonal.save();
    res.status(200).json({ 'status': 'success', 'mssg': 'personal added successfully' });
  } catch (error) {
    res.status(409).send({ 'status': 'failure', 'mssg': 'unable to save to database' });
  }
});


// api to get personal
personalRoutes.route('/personal').get(function (req, res) {

  personal.find(function (err, personal) {
    if (err) {
      res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
    } else {
      res.status(200).json({ 'status': 'success', 'personal': personal });
    }
  });
});

// api to get personal
personalRoutes.route('/personal/:id').get(function (req, res) {
  let id = req.params.id;
  personal.findById(id, function (err, personal) {
    if (err) {
      res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
    } else {
      res.status(200).json({ 'status': 'success', 'personal': personal });
    }
  });
});

// api to update route
personalRoutes.route('/update/:id').put(function (req, res) {
  personal.findById(req.params.id, function (err, personal) {
    if (!personal) {
      res.status(400).send({ 'status': 'failure', 'mssg': 'Unable to find data' });
    } else {
      personal.name = req.body.name;
      personal.marca = req.body.marca;
      personal.tamanho = req.body.tamanho;
      personal.nivel = req.body.nivel;

      personal.save().then(business => {
        res.status(200).json({ 'status': 'success', 'mssg': 'Update complete' });
      });
    }
  });
});

// api for delete
personalRoutes.route('/delete/:id').delete(function (req, res) {
  personal.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
    } else {
      res.status(200).json({ 'status': 'success', 'mssg': 'Delete successfully' });
    }
  });
});


// api to get personal by name
personalRoutes.route('/personalname/:name').get(function (req, res) {
  let name = req.params.name;
  personal.findOne({ name: name }, function (err, personal) {
    if (err) {
      res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
    } else if (!personal) {
      res.status(404).send({ 'status': 'failure', 'mssg': 'personal not found' });
    } else {
      res.status(200).send({ 'status': 'success', 'name': personal.name, 'email':personal.email, 'idade': personal.idade });
    }
  });
});

// Rota de login
personalRoutes.route('/login').post(async function(req, res, next) {
  try {
    const { login, senha } = req.body;

    // Procurar o usuário pelo login
    const foundpersonal = await personal.findOne({ crm: login });
    if (!foundpersonal) {
      return res.status(404).json({ 'status': 'failure', 'mssg': 'personal not found' });
    }
    // Comparar a senha fornecida com a senha armazenada
    const isPasswordMatch = await bcrypt.compare(senha, foundpersonal.senha);
    if (!isPasswordMatch) {
      return res.status(401).json({ 'status': 'failure', 'mssg': 'Incorrect password' });
    }

    // Login bem-sucedido
    return res.status(200).json({ 'status': 'success', 'mssg': 'Login successful' });
  } catch (error) {
    return next(error);
  }
});





module.exports = personalRoutes;