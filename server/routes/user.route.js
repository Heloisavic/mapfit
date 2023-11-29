const express = require('express');
const app = express();
const userRoutes = express.Router();
const bcrypt = require('bcryptjs');
const SALT_ROUNDS = 10;
let user = require('../model/user');

// api to add user
userRoutes.route('/add').post(async function (req, res) {
  try {
    const novouser = new user(req.body);
    const hashedPassword = await bcrypt.hash(req.body.senha, SALT_ROUNDS);
    novouser.senha = hashedPassword;
    await novouser.save();
    await novouser.save();
    res.status(200).json({ 'status': 'success', 'mssg': 'user added successfully' });
  } catch (error) {
    res.status(409).send({ 'status': 'failure', 'mssg': 'unable to save to database' });
  }
});


// api to get user
userRoutes.route('/user').get(function (req, res) {

  user.find(function (err, user) {
    if (err) {
      res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
    } else {
      res.status(200).json({ 'status': 'success', 'user': user });
    }
  });
});

// api to get user
userRoutes.route('/user/:id').get(function (req, res) {
  let id = req.params.id;
  user.findById(id, function (err, user) {
    if (err) {
      res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
    } else {
      res.status(200).json({ 'status': 'success', 'user': user });
    }
  });
});

// api to update route
userRoutes.route('/update/:id').put(function (req, res) {
  user.findById(req.params.id, function (err, user) {
    if (!user) {
      res.status(400).send({ 'status': 'failure', 'mssg': 'Unable to find data' });
    } else {
      user.name = req.body.name;
      user.marca = req.body.marca;
      user.tamanho = req.body.tamanho;
      user.nivel = req.body.nivel;

      user.save().then(business => {
        res.status(200).json({ 'status': 'success', 'mssg': 'Update complete' });
      });
    }
  });
});

// api for delete
userRoutes.route('/delete/:id').delete(function (req, res) {
  user.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
    } else {
      res.status(200).json({ 'status': 'success', 'mssg': 'Delete successfully' });
    }
  });
});


// api to get user by name
userRoutes.route('/username/:name').get(function (req, res) {
  let name = req.params.name;
  user.findOne({ name: name }, function (err, user) {
    if (err) {
      res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
    } else if (!user) {
      res.status(404).send({ 'status': 'failure', 'mssg': 'user not found' });
    } else {
      res.status(200).send({ 'status': 'success', 'name': user.name, 'email':user.email, 'idade': user.idade });
    }
  });
});

// Rota de login
userRoutes.route('/login').post(async function(req, res, next) {
  try {
    const { login, senha } = req.body;

    // Procurar o usuário pelo login
    const foundUser = await user.findOne({ email: login });
    if (!foundUser) {
      return res.status(404).json({ 'status': 'failure', 'mssg': 'User not found' });
    }
    // Comparar a senha fornecida com a senha armazenada
    const isPasswordMatch = await bcrypt.compare(senha, foundUser.senha);
    if (!isPasswordMatch) {
      return res.status(401).json({ 'status': 'failure', 'mssg': 'Incorrect password' });
    }

    // Login bem-sucedido
    return res.status(200).json({ 'status': 'success', 'mssg': 'Login successful' });
  } catch (error) {
    return next(error);
  }
});





module.exports = userRoutes;